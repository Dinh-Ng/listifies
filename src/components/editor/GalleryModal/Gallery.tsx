import { FC, ReactElement } from 'react'
import { BsCardImage } from 'react-icons/bs'

import Image from './Image'

interface Props {
  images: { src: string }[]
  onSelect(src: string): void
  uploading?: boolean
  selectedImage?: string
}

const Gallery: FC<Props> = ({
  images,
  uploading = false,
  selectedImage = '',
  onSelect,
}): ReactElement => {
  return (
    <div className="flex flex-wrap">
      {uploading && (
        <div className="bg-secondary-light text-primary-dark flex aspect-square basis-1/4 animate-pulse flex-col items-center justify-center rounded p-2">
          <BsCardImage size={60} />
          <p>Uploading</p>
        </div>
      )}
      {images.map(({ src }, index) => {
        return (
          <div key={index} className="basis-1/4 p-2">
            <Image
              src={src}
              selected={selectedImage === src}
              onClick={() => onSelect(src)}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Gallery
