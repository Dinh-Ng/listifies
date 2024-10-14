import { FC, useEffect, useState } from 'react'
import { validateUrl } from '../EditorUtils'

interface Props {
  visible: boolean;
  onSubmit(link: linkOption): void;
  initialState?: linkOption;
}

export type linkOption = {
  url: string;
  openInNewTab: boolean;
};

const defaultLink = {
  url: '',
  openInNewTab: false,
}

const LinkForm: FC<Props> = ({
  visible,
  initialState,
  onSubmit,
}): JSX.Element | null => {
  const [link, setLink] = useState<linkOption>(defaultLink)

  const handleSubmit = () => {
    onSubmit({ ...link, url: validateUrl(link.url) })
    resetForm()
  }

  const resetForm = () => {
    setLink({ ...defaultLink })
  }

  useEffect(() => {
    if (initialState) setLink({ ...initialState })
  }, [initialState])

  if (!visible) return null

  return (
    <div className="bg-primary dark:bg-primary-dark shadow-secondary-dark rounded p-2 shadow-sm">
      <input
        autoFocus
        type="text"
        className="border-secondary-dark focus:border-primary-dark dark:focus:border-primary text-primary-dark dark:text-primary rounded border-2 bg-transparent p-2 transition"
        placeholder="https://example.com"
        value={link.url}
        onChange={({ target }) => setLink({ ...link, url: target.value })}
      />

      <div className="mt-2 flex items-center space-x-2">
        <input
          type="checkbox"
          id="open-in-new-tab"
          checked={link.openInNewTab}
          onChange={({ target }) =>
            setLink({ ...link, openInNewTab: target.checked })
          }
        />
        <label htmlFor="open-in-new-tab">open in new tab</label>

        <div className="flex-1 text-right">
          <button
            onClick={handleSubmit}
            className="bg-action text-primary rounded px-2 py-1 text-sm"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}

export default LinkForm
