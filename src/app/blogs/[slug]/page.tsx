/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import houseImg from '@/asset/img/house.webp'
import { Mail, Phone } from 'lucide-react'

import Banner from '@/components/banner'
import Header from '@/components/Header'
import Layout from '@/components/layout'

export default function DetailBlog() {
  return (
    <Layout>
      <Header />
      <div className="mx-auto">
        {/* Main Content */}
        <main className="relative py-2">
          <div className="h-32 w-full bg-[#fef5da] px-2 pt-2">
            <h1 className="mb-4 text-3xl font-bold">
              Blog Detail Page - Post Title
            </h1>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <section className="mb-6 rounded">
                  <div className="relative">
                    <div className="absolute left-2 top-2 flex items-center space-x-4">
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
                </section>
                <article className="prose max-w-none">
                  <p>
                    <strong>Lorem Ipsum</strong> is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has
                  </p>
                </article>
              </div>
              <aside className=" bg-white">
                <div className="mb-4 items-center space-x-4 rounded border p-4">
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
                </div>
                <Banner />
              </aside>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}