/* eslint-disable @next/next/no-img-element */
// import houseImg from '@/asset/img/house.webp'
import Link from 'next/link'
import { blogs } from '@/asset/data/fakeData'
import { ChevronLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import Transition from '@/components/Transition'

import BlogItem from '../components/blogItem'

export default function DetailBlog() {
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
              <Button variant="ghost" className="px-0">
                <Link href="/blogs" className="row flex items-center">
                  <ChevronLeft />
                  <p className="text-lg">Blog</p>
                </Link>
              </Button>
              <div className="grid gap-4 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_350px]">
                <div>
                  <div className="rounded border-none bg-white shadow-lg">
                    <div className="mb-6 p-4">
                      <h1 className="mb-2 line-clamp-1 text-3xl font-bold">
                        Blog Detail Page - Post Title
                      </h1>
                      <div className="text-base font-bold text-[#505050]">
                        <p className="font-bold ">
                          Author | Published mm-dd-yyyy
                        </p>
                        <p className="">#tagName</p>
                      </div>
                    </div>
                    <img
                      alt="hero_img"
                      className="w-full"
                      src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
                    />
                    <article className="prose max-w-none rounded p-4">
                      <p>
                        <strong>Lorem Ipsum</strong> is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                      </p>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here, content
                        here`, making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for lorem ipsum will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose
                        (injected humour and the like).
                      </p>
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of de
                        Finibus Bonorum et Malorum (The Extremes of Good and
                        Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during
                        the Renaissance. The first line of Lorem Ipsum, Lorem
                        ipsum dolor sit amet.., comes from a line in section
                        1.10.32.
                      </p>
                    </article>
                  </div>

                  <div className="mt-10">
                    <p className="mb-4 text-lg font-bold">
                      This author’s Blog Posts
                    </p>
                    {blogs.map((item, index) => (
                      <BlogItem blog={item} index={index} />
                    ))}
                  </div>
                </div>
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
