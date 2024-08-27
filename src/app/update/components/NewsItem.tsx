import { Share2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

const NewsItem = ({
  title,
  content,
  amountOfWords = 30,
}: {
  title: string
  content: string
  amountOfWords?: number
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const splittedText = content.split(' ')
  const itCanOverflow = splittedText.length > amountOfWords
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(' ')
    : content
  const endText = splittedText.slice(amountOfWords - 1).join(' ')

  // const handleKeyboard = (e) => {
  //   if (e.code === 'Space' || e.code === 'Enter') {
  //     setIsExpanded(!isExpanded)
  //   }
  // }

  return (
    <div className="">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xl font-bold">{title}</p>
        <Button variant={'ghost'}>
          <Share2 className="mr-2" />
          Share
        </Button>
      </div>
      <p id="read-more-text">
        {beginText}
        {itCanOverflow && (
          <>
            {!isExpanded && <span>... </span>}
            <span
              className={`${!isExpanded && 'hidden'}`}
              aria-hidden={!isExpanded}
            >
              {endText}
            </span>
            <span
              className="ml-2 text-violet-400"
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              aria-controls={'read-more-text'}
              // onKeyDown={handleKeyboard}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'show less' : 'show more'}
            </span>
          </>
        )}
      </p>
    </div>
  )
}

export default NewsItem
