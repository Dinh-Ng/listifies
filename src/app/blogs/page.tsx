/* eslint-disable @next/next/no-img-element */
import { blogs } from '@/asset/data/fakeData'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FilterMenu } from '@/components/_Header'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import Transition from '@/components/Transition'
import BlogItem from '@/app/blogs/components/blogItem'

export default function Blogs() {
  return (
    <Layout>
      <Header href="/blogs" />
      <main className="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4 md:gap-8">
        <Transition>
          <img
            alt="hero_img"
            className="mb-6 h-44 w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
          />
          <div className="mx-auto grid w-full grow items-start gap-6 md:grid-cols-[1fr_280px] lg:w-10/12 lg:grid-cols-[1fr_350px]">
            <div className="grid gap-6">
              <Card x-chunk="dashboard-04-chunk-2">
                <CardHeader className="flex flex-row items-center justify-between p-4">
                  <CardTitle>Blogs</CardTitle>
                  <FilterMenu />
                </CardHeader>
                <CardContent className="p-4">
                  {blogs.map((blog, index) => (
                    <BlogItem blog={blog} key={index} index={index} />
                  ))}
                </CardContent>
              </Card>
            </div>
            <Banner />
          </div>

          <Footer />
        </Transition>
      </main>
    </Layout>
  )
}
