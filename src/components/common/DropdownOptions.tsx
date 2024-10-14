import { FC, ReactNode, useState } from 'react'

interface Props {
  options: { label: string; onClick(): void }[]
  head: ReactNode
}

const DropdownOptions: FC<Props> = ({ head, options }): JSX.Element => {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <button
      onBlur={() => setShowOptions(false)}
      onMouseDown={() => setShowOptions(!showOptions)}
      className="relative"
    >
      {head}
      {showOptions && (
        <div className="border-primary-dark dark:border-primary bg-primary dark:bg-primary-dark absolute right-2 top-full z-10 mt-4 min-w-max rounded border-2 text-left">
          <ul className="space-y-3 p-3">
            {options.map(({ label, onClick }, index) => {
              return (
                <li key={label + index} onMouseDown={onClick}>
                  {label}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </button>
  )
}

export default DropdownOptions
