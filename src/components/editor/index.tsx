'use client'

import { ChangeEventHandler, FC, useEffect, useState } from 'react'
import TipTapImage from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import Youtube from '@tiptap/extension-youtube'
import { EditorContent, getMarkRange, Range, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import axios from 'axios'

import ActionButton from '@/components/common/ActionButton'

import GalleryModal, { ImageSelectionResult } from './GalleryModal'
import EditLink from './Link/EditLink'
import SEOForm, { SeoResult } from './SeoForm'
import ThumbnailSelector from './ThumbnailSelector'
import ToolBar from './ToolBar'

export interface FinalPost extends SeoResult {
  title: string
  content: string
  thumbnail?: File | string
}

interface Props {
  initialValue?: FinalPost
  btnTitle?: string
  busy?: boolean
  onSubmit(post: FinalPost): void
}

const Editor: FC<Props> = ({
  initialValue,
  btnTitle = 'Submit',
  busy = false,
  onSubmit,
}): JSX.Element => {
  const [selectionRange, setSelectionRange] = useState<Range>()
  const [showGallery, setShowGallery] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [images, setImages] = useState<{ src: string }[]>([])
  const [seoInitialValue, setSeoInitialValue] = useState<SeoResult>()
  const [post, setPost] = useState<FinalPost>({
    title: '',
    content: '',
    meta: '',
    tags: '',
    slug: '',
  })

  // const fetchImages = async () => {
  //   const { data } = await axios('/api/image')
  //   setImages(data.images)
  // }

  const handleImageUpload = async (image: File) => {
    setUploading(true)
    const formData = new FormData()
    formData.append('image', image)
    const { data } = await axios.post('/api/image', formData)
    setUploading(false)

    setImages([data, ...images])
  }

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        autolink: false,
        linkOnPaste: false,
        openOnClick: false,
        HTMLAttributes: {
          target: '',
        },
      }),
      Placeholder.configure({
        placeholder: 'Type something',
      }),
      Youtube.configure({
        width: 840,
        height: 472.5,
        HTMLAttributes: {
          class: 'mx-auto rounded',
        },
      }),
      TipTapImage.configure({
        HTMLAttributes: {
          class: 'mx-auto',
        },
      }),
    ],
    editorProps: {
      handleClick(view, pos, _event) {
        const { state } = view
        const selectionRange = getMarkRange(
          state.doc.resolve(pos),
          state.schema.marks.link
        )
        if (selectionRange) setSelectionRange(selectionRange)
      },
      attributes: {
        class:
          'prose prose-lg focus:outline-none dark:prose-invert max-w-full mx-auto h-full',
      },
    },
  })

  const handleImageSelection = (result: ImageSelectionResult) => {
    editor
      ?.chain()
      .focus()
      .setImage({ src: result.src, alt: result.altText })
      .run()
  }

  const handleSubmit = () => {
    if (!editor) return
    onSubmit({ ...post, content: editor.getHTML() })
  }

  const updateTitle: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    setPost({ ...post, title: target.value })

  const updateSeoValue = (result: SeoResult) => setPost({ ...post, ...result })

  const updateThumbnail = (file: File) => setPost({ ...post, thumbnail: file })

  useEffect(() => {
    if (editor && selectionRange) {
      editor.commands.setTextSelection(selectionRange)
    }
  }, [editor, selectionRange])

  // useEffect(() => {
  //   fetchImages()
  // }, [])

  useEffect(() => {
    if (initialValue) {
      setPost({ ...initialValue })
      editor?.commands.setContent(initialValue.content)

      const { meta, slug, tags } = initialValue
      setSeoInitialValue({ meta, slug, tags })
    }
  }, [initialValue, editor])

  return (
    <>
      <div className="p-3 transition">
        <div className="sticky top-0 z-10">
          {/* Thumbnail Selector and Submit Button */}
          <div className="mb-3 flex items-center justify-between">
            <ThumbnailSelector
              initialValue={post.thumbnail as string}
              onChange={updateThumbnail}
            />
            <div className="inline-block">
              <ActionButton
                busy={busy}
                title={btnTitle}
                onClick={handleSubmit}
              />
            </div>
          </div>

          {/* Title Input */}
          <input
            type="text"
            className="border-secondary text-primary mb-3 w-full border-0 border-b bg-transparent py-2 text-3xl font-semibold italic outline-none"
            placeholder="Title"
            onChange={updateTitle}
            value={post.title}
          />
          <ToolBar
            editor={editor}
            onOpenImageClick={() => setShowGallery(true)}
          />
          <div className="bg-secondary my-3 h-px w-full" />
        </div>

        {editor ? <EditLink editor={editor} /> : null}
        <EditorContent editor={editor} className="min-h-[300px]" />
        <div className="bg-secondary my-3 h-px w-full" />
        <SEOForm
          onChange={updateSeoValue}
          title={post.title}
          initialValue={seoInitialValue}
        />
      </div>

      <GalleryModal
        visible={showGallery}
        onClose={() => setShowGallery(false)}
        onSelect={handleImageSelection}
        images={images}
        onFileSelect={handleImageUpload}
        uploading={uploading}
      />
    </>
  )
}

export default Editor
