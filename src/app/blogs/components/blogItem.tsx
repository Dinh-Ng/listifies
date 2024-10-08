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
      className="bg-muted/80 mb-4 grid items-start rounded-md sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[4fr_8fr]"
    >
      <img
        src={blog.imageUrl}
        alt="Post Image"
        // width={blog.width}
        // height={blog.height}
        className="mb-4 w-full md:mb-0 md:mr-4"
      />
      <div className="p-2">
        <h2 className="text-lg font-bold">{blog.title}</h2>
        <p className="inline lg:hidden">
          {blog.author} <br /> Published {blog.date}
        </p>
        <p className="hidden lg:block">
          {blog.author} | {blog.date}
        </p>
        <div className="mt-2 flex gap-1">
          {['Tag1', 'Tag2', 'English'].map((item) => (
            <p className="bg-[#fef5da] p-1 px-2">{item}</p>
          ))}
        </div>
      </div>
    </Link>
  )
}
