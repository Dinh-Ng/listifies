/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

type Props = {
  index: number
  blog: {
    title: string,
    author: string,
    date: string,
    category: string,
    language: string,
    imageUrl: string,
    width: number,
    height: number,
  }
}

export default function BlogItem({ blog, index }: Props) {
  return (
    <Link
      key={index}
      href={`/blogs/${index}`}
      className="mb-4 flex items-start border p-4"
    >
      <img
        src={blog.imageUrl}
        alt="Post Image"
        width={blog.width}
        height={blog.height}
        className="mr-4"
      />
      <div>
        <h2 className="text-lg font-bold">{blog.title}</h2>
        <p>
          {blog.author} | {blog.date}
        </p>
        <p>
          {blog.category} | {blog.language}
        </p>
      </div>
    </Link>
  )
}
