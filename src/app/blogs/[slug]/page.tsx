/* eslint-disable @next/next/no-img-element */
// import houseImg from '@/asset/img/house.webp'
import { Mail, Phone } from 'lucide-react'

import { Card } from '@/components/ui/card'
import Banner from '@/components/banner'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import Transition from '@/components/Transition'

export default function DetailBlog() {
  return (
    <Layout>
      <Header href={'/blogs'} />
      {/*<div className="mx-auto">*/}
      {/* Main Content */}
      <main className="bg-muted/40 w-full pb-2">
        <Transition>
          <div
            className="flex h-72 w-full flex-col items-center bg-gradient-to-r from-orange-400 via-orange-500 to-red-500
 px-2 py-6"
          >
            <div className="w-full px-4 md:px-6 lg:w-10/12">
              <div className="grid gap-4 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_350px]">
                <div className="">
                  <h1 className="mb-2 text-3xl font-bold">
                    Blog Detail Page - Post Title
                  </h1>
                  <div className="text-base font-bold text-[#505050]">
                    <p className="font-bold ">Author | Published mm-dd-yyyy</p>
                    <p className="">#tagName</p>
                  </div>
                  {/* <section className="mb-6 rounded">
                    <div className="relative">
                      <div className="absolute left-0 top-0 flex w-full items-center space-x-4 bg-gradient-to-b from-black p-2">
                        <img
                          src="https://placehold.co/150x150"
                          alt="Author Image"
                          className="size-12 rounded-full"
                        />
                        <div className="text-sm">
                          <p className="font-bold text-white">
                            Author | Published mm-dd-yyyy
                          </p>
                          <p className="text-white">#tagName</p>
                        </div>
                      </div>
                      <Image
                        alt="Post Image"
                        src={houseImg}
                        className="h-auto w-full rounded"
                      />
                    </div>
                  </section> */}
                  <section />
                  <article className="prose mt-10 max-w-none">
                    <p className='rounded bg-white p-2'>
                      <strong>Lorem Ipsum</strong> is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry&apos;s standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has
                    </p>
                  </article>
                </div>
                <AuthorInfo />
              </div>
            </div>
          </div>
        </Transition>
      </main>
      {/*</div>*/}
    </Layout>
  )
}

function AuthorInfo() {
  return (
    <aside className="mt-36">
      <Card className="mb-10 items-center space-x-4 rounded border p-4">
        <div className="flex">
          <img
            src="https://placehold.co/100x100"
            alt="Author Image"
            className="size-16 rounded-full"
          />
          <div className="ml-2 text-sm">
            <h2 className="text-xl font-bold">Author Name</h2>
            <p>Job Title</p>
            <p>License#: 1234567</p>
          </div>
        </div>

        <div className="flex">
          <Mail />
          <p className="ml-2">author@gmail.com</p>
        </div>
        <div className="flex">
          <Phone />
          <p className="ml-2">(123) 456-7890</p>
        </div>
      </Card>
      <Banner />
    </aside>
  )
}
