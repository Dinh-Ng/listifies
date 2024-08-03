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
          <div className="flex h-72 w-full flex-col items-center bg-gradient-to-r from-slate-100 to-slate-700 px-2 py-6">
            <div className="w-full px-2 lg:w-10/12 lg:px-4">
              <div className="grid gap-4 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_350px]">
                <div className="">
                  <h1 className="mb-2 line-clamp-1 text-3xl font-bold">
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
                  <article className="prose mt-10 max-w-none rounded bg-white p-2">
                    <p>
                      <strong>Lorem Ipsum</strong> is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry&apos;s standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has
                    </p>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using Content here, content here`, making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for lorem ipsum will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </p>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum
                      comes from sections 1.10.32 and 1.10.33 of de Finibus
                      Bonorum et Malorum (The Extremes of Good and Evil) by
                      Cicero, written in 45 BC. This book is a treatise on the
                      theory of ethics, very popular during the Renaissance. The
                      first line of Lorem Ipsum, Lorem ipsum dolor sit amet..,
                      comes from a line in section 1.10.32.
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
