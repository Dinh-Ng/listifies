'use client'

/* eslint-disable @next/next/no-img-element */
// import houseImg from '@/asset/img/house.webp'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getBlogById, getFirstThreeUserBlogs } from '@/utils/firestore'
import { ChevronLeft } from 'lucide-react'

import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import Loading from '@/components/Loading'
import NavigationSection from '@/components/NavigationSection'
import Transition from '@/components/Transition'
import { Blog } from '@/app/portal/blogs/data'

import BlogItem from '../components/blogItem'

export default function DetailBlog() {
  const params = useParams<{slug: string}>()
  const { toast } = useToast()

  const [blog, setBlog] = useState<Blog>()
  const [blogLists, setBlogLists] = useState<Blog[]>()

  useEffect(() => {
    fetchDetailBlog()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchDetailBlog = async () => {
    try {
      const blogDetail = await getBlogById(params.slug)

      console.log('blogDetail :>> ', blogDetail)
      setBlog(blogDetail)
      await fetchSameBlog(blogDetail?.userId)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch blogs. Please try again.',
        variant: 'destructive',
      })
    }
  }

  const fetchSameBlog = async (userId: string) => {
    try {
      const blogList = await getFirstThreeUserBlogs(userId)
      console.log('blogList :>> ', blogList)
      setBlogLists(blogList)
    } catch (err) {
      console.error('Error fetching user blogs:', err)
      toast({
        title: 'Error',
        description: 'Failed to fetch blogs. Please try again.',
        variant: 'destructive',
      })
    }
  }

  return (
    <Layout>
      <Header href={'/blogs'} />
      {/*<div className="mx-auto">*/}
      {/* Main Content */}
      <main className="bg-muted/40 w-full pb-2">
        <Transition>
          <img
            alt="hero_img"
            className="mb-6 h-44 w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
          />
          <div
            className="flex w-full flex-col items-center bg-cover bg-center px-2 py-6"
            // style={{
            //   backgroundImage:
            //     "linear-gradient(to right, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.6) 100%), url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914')",
            // }}
          >
            <div className="w-full px-2 lg:w-10/12 lg:px-4">
              <Button variant="ghost" className="px-0 lg:ml-[14vw]">
                <Link href="/blogs" className="row flex items-center">
                  <ChevronLeft />
                  <p className="text-lg">Blog</p>
                </Link>
              </Button>
              <div className="grid items-start gap-4 md:grid-cols-1 lg:grid-cols-[2fr_7fr_3fr]">
                <NavigationSection currentHref={'/blogs'} />
                {blog ? (
                  <div>
                    <div className="rounded border-none bg-white shadow-lg">
                      <div className="mb-6 p-4">
                        <h1 className="mb-2 line-clamp-1 text-lg font-bold lg:text-xl">
                          {blog?.title}
                        </h1>
                        <div className="text-base font-bold text-[#505050]">
                          <p className="font-bold ">
                            {`${blog.userName} | Published ${blog?.updatedAt?.toDate()?.toLocaleDateString()}`}
                          </p>
                          <div className="flex">
                            {blog?.tags
                              ?.split(',')
                              ?.map((item: any, index: number) => (
                                <p className="mr-1" key={index}>
                                  {'#' + item?.trim()}
                                </p>
                              ))}
                          </div>
                        </div>
                      </div>
                      <img
                        alt="hero_img"
                        className="w-full"
                        src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
                      />
                      <article className="prose max-w-none rounded p-4">
                        {blog?.content && <div
                          dangerouslySetInnerHTML={{__html: blog?.content}}
                        />}
                      </article>
                    </div>

                    <div className="mt-10">
                      <p className="mb-4 text-lg font-bold">
                        This author’s Blog Posts
                      </p>
                      {blogLists?.map((item) => (
                        <BlogItem blog={item} key={item.id} />
                      ))}
                    </div>
                  </div>
                ) : (
                  <Loading />
                )}
                <AuthorInfo />
              </div>
            </div>
          </div>

          <Footer />
        </Transition>
      </main>
      {/*</div>*/}
    </Layout>
  )
}

function AuthorInfo() {
  return (
    <aside className="">
      <Card className="mb-10 items-center space-x-4 rounded border-none p-4 shadow-lg">
        <div className="flex">
          <img
            src="https://placehold.co/100x100"
            alt="Author Image"
            className="size-16 rounded-full"
          />
          <div className="ml-2 flex flex-col justify-center text-sm">
            <h2 className="text-xl font-bold">Author Name</h2>
            <p>Job Title</p>
          </div>
        </div>

        <div className="mt-2">
          <p>License#: 1234567</p>
          <p>Mail: author@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div className="mt-2 flex w-full gap-2">
          <Button variant={'outline'}>Message</Button>
          <Button variant={'outline'}>Call</Button>
        </div>
      </Card>
      <Banner />
    </aside>
  )
}
