import { blogs } from '@/asset/data/fakeData'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Banner from '@/components/banner'
import Header from '@/components/Header'
import Layout from '@/components/layout'

import BlogItem from './blogs/components/blogItem'

export default function Home() {
  return (
    <Layout>
      <Header href={'/'} />
      <main className="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4 p-4 md:gap-8 md:px-6">
        <div className="mx-auto grid w-full items-start gap-6 md:grid-cols-[280px_1fr] lg:w-10/12 lg:grid-cols-[350px_1fr]">
          <Banner />
          <div className="grid gap-6">
            <h1 className={'text-xl font-semibold'}>Latest</h1>
            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>Open House</CardTitle>
              </CardHeader>
            </Card>

            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>Blogs</CardTitle>
              </CardHeader>
              <CardContent>
                {blogs.map((blog, index) => (
                  <BlogItem blog={blog} key={index} index={index} />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </Layout>
  )
}
