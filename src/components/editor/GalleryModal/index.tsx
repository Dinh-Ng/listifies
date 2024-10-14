import { ChangeEventHandler, FC, useCallback, useState } from 'react'
import Image from 'next/image'
import { AiOutlineCloudUpload } from 'react-icons/ai'

import ActionButton from '../../common/ActionButton'
import ModalContainer, { ModalProps } from '../../common/ModalContainer'
import Gallery from './Gallery'

export interface ImageSelectionResult {
  src: string
  altText: string
}

interface Props extends ModalProps {
  images: { src: string }[]
  uploading?: boolean
  onFileSelect(): void
  onSelect(): void
}

const GalleryModal: FC<Props> = ({
  visible,
  uploading,
  images,
  onFileSelect,
  onSelect,
  onClose,
}): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState('')
  const [altText, setAltText] = useState('')

  const handleClose = useCallback(() => onClose && onClose(), [onClose])

  const handleOnImageChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const { files } = target
    if (!files) return

    const file = files[0]
    if (!file.type.startsWith('image')) return handleClose()

    onFileSelect(file)
  }

  const handleSelection = () => {
    if (!selectedImage) return handleClose()
    onSelect({ src: selectedImage, altText })
    handleClose()
  }

  return (
    <ModalContainer visible={visible} onClose={onClose}>
      <div className="bg-primary-dark dark:bg-primary max-w-4xl rounded p-2">
        <div className="flex">
          {/* gallery */}
          <div
            // eslint-disable-next-line tailwindcss/no-unnecessary-arbitrary-value
            className="custom-scroll-bar max-h-[450px] basis-[75%] overflow-y-auto"
          >
            <Gallery
              images={images}
              selectedImage={selectedImage}
              uploading={uploading}
              onSelect={(src) => setSelectedImage(src)}
            />
          </div>

          {/* image selection and upload */}
          <div className="basis-1/4 px-2">
            <div className="space-y-4">
              <div>
                <input
                  onChange={handleOnImageChange}
                  hidden
                  type="file"
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <div className="border-action text-action flex w-full cursor-pointer items-center justify-center space-x-2 rounded border-2 p-2">
                    <AiOutlineCloudUpload />
                    <span>Upload Image</span>
                  </div>
                </label>
              </div>

              {selectedImage ? (
                <>
                  <textarea
                    className="border-secondary-dark text-primary dark:text-primary-dark h-32 w-full resize-none rounded border-2 bg-transparent p-1 focus:ring-1"
                    placeholder="Alt text"
                    value={altText}
                    onChange={({ target }) => setAltText(target.value)}
                  ></textarea>

                  <ActionButton onClick={handleSelection} title="Select" />

                  <div className="bg-png-pattern relative aspect-video">
                    <Image
                      src={selectedImage}
                      layout="fill"
                      objectFit="contain"
                      alt="selected-image"
                    />
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  )
}

export default GalleryModal
