/* eslint-disable @next/next/no-img-element */
import { blogs } from '@/asset/data/fakeData'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FilterMenu } from '@/components/_Header'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import NavigationSection from '@/components/NavigationSection'
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
          <div className="mx-auto grid w-full grow items-start gap-6 md:grid-cols-1 lg:w-10/12 lg:grid-cols-[2fr_7fr_3fr]">
            <NavigationSection currentHref="/blogs" />
            <div className="grid gap-2">
              <CardHeader className="flex h-14 flex-row items-center justify-between px-4 py-0 lg:px-0">
                <CardTitle>Blogs</CardTitle>
                <FilterMenu />
              </CardHeader>
              <Card
                x-chunk="dashboard-04-chunk-2"
                className="border-none shadow-lg"
              >
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
