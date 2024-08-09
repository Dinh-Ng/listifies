/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

type Props = {
  index: number
  blog: {
    title: string
    author: string
    date: string
    category: string
    language: string
    imageUrl: string
    width: number
    height: number
  }
}

export default function BlogItem({ blog, index }: Props) {
  return (
    <Link
      key={index}
      href={`/blogs/${index}`}
      className="bg-muted/80 mb-4 flex flex-col items-start rounded-md p-4 md:flex-row"
    >
      <img
        src={blog.imageUrl}
        alt="Post Image"
        width={blog.width}
        height={blog.height}
        className="mb-4 md:mb-0 md:mr-4"
      />
      <div>
        <h2 className="text-lg font-bold">{blog.title}</h2>
        <p>
          {blog.author} | Published {blog.date}
        </p>
        <div className="mt-2 flex gap-1">
          {['Tag1', 'Tag2', 'English'].map((item) => (
            <TagItem text={item} />
          ))}
        </div>
      </div>
    </Link>
  )
}

const TagItem = ({ text }: { text: string }) => {
  return (
    <Link href={'#'}>
      <p className='bg-[#fef5da] p-1 px-2'>{text}</p>
    </Link>
  )
}
