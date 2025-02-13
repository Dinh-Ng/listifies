/* eslint-disable @next/next/no-img-element */
import { Blog } from '@/app/portal/blogs/data'
import Link from 'next/link'

type Props = {
  blog: Blog
}

export default function BlogItem({ blog }: Props) {
  const updatedAt = (blog?.updatedAt as unknown as { toDate(): Date })?.toDate()
  const date = updatedAt instanceof Date ? updatedAt.toLocaleDateString('en-US') : ''
  return (
    <Link
      href={`/blogs/${blog.id}`}
      className="bg-muted/80 mb-4 grid items-start rounded-md sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[4fr_8fr]"
    >
      <img
        src={'https://images.unsplash.com/photo-1580587771525-78b9dba3b914'}
        alt="Post Image"
        // width={blog.width}
        // height={blog.height}
        className="mb-4 w-full md:mb-0 md:mr-4"
      />
      <div className="p-2">
        <h2 className="text-lg font-bold">{blog?.title}</h2>
        <p className="inline lg:hidden">
          {blog.userName} <br /> Published {date}
        </p>
        <p className="hidden lg:block">
          {blog.userName} | {date}
        </p>
        <div className="mt-2 flex gap-1">
          {blog?.tags?.split(',')?.map((item: any, index: number) => (
            <p className="bg-[#fef5da] p-1 px-2" key={index}>{item}</p>
          ))}
        </div>
      </div>
    </Link>
  )
}
