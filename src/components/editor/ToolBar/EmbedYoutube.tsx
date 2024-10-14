import { FC, useState } from 'react'
import { BsYoutube } from 'react-icons/bs'
import Button from '../ToolBar/Button'

interface Props {
  onSubmit(): void;
}

const EmbedYoutube: FC<Props> = ({ onSubmit }): JSX.Element => {
  const [url, setUrl] = useState('')
  const [visible, setVisible] = useState(false)

  const handleSubmit = () => {
    if (!url.trim()) return hideForm()

    onSubmit(url)
    setUrl('')
    hideForm()
  }

  const hideForm = () => setVisible(false)
  const showForm = () => setVisible(true)

  return (
    <div
      onKeyDown={({ key }) => {
        if (key === 'Escape') hideForm()
      }}
      className="relative"
    >
      <Button onClick={visible ? hideForm : showForm}>
        <BsYoutube />
      </Button>

      {visible && (
        <div className="absolute right-0 top-full z-50 mt-4">
          <div className="flex space-x-2">
            <input
              autoFocus
              type="text"
              className="border-secondary-dark focus:border-primary-dark dark:focus:border-primary text-primary-dark dark:text-primary rounded border-2 bg-transparent p-2 transition"
              placeholder="https://youtube.com"
              value={url}
              onChange={({ target }) => setUrl(target.value)}
            />
            <button
              onClick={handleSubmit}
              className="bg-action text-primary rounded p-2 text-sm"
            >
              Embed
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmbedYoutube
