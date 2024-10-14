import { FC } from 'react'
import NextImage from 'next/image'

import CheckMark from '../../common/CheckMark'

interface Props {
  src: string
  selected?: boolean
  onClick?(): void
}

const Image: FC<Props> = ({ src, selected, onClick }): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer overflow-hidden rounded"
    >
      <NextImage
        src={src}
        width={200}
        height={200}
        alt="gallery"
        objectFit="cover"
        className="bg-secondary-light transition hover:scale-110"
      />
      <div className="absolute left-2 top-2">
        <CheckMark visible={selected || false} />
      </div>
    </div>
  )
}

export default Image
