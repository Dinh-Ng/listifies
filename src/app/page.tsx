import Link from 'next/link'
import { blogs, listings } from '@/asset/data/fakeData'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Banner from '@/components/banner'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import Transition from '@/components/Transition'

import BlogItem from './blogs/components/blogItem'
import ListingItem from './listings/components/listingItem'

export default function Home() {
  return (
    <Layout>
      <Header href={'/'} />
      <main className="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4 p-4 md:gap-8 md:px-6">
        <Transition>
          <div className="mx-auto grid w-full items-start gap-6 md:grid-cols-[1fr_280px] lg:w-10/12 lg:grid-cols-[1fr_350px]">
            <div className="grid gap-6">
              <h1 className={'text-xl font-semibold'}>Latest</h1>
              <Card x-chunk="dashboard-04-chunk-2">
                <CardHeader className="p-4 lg:p-6">
                  <CardTitle>Properties</CardTitle>
                  {[listings[0]].map((listing, index) => (
                    <ListingItem listing={listing} index={index} />
                  ))}
                </CardHeader>

                <CardContent className="flex justify-end">
                  <Button asChild variant="outline">
                    <Link href={'/blogs'}>View More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card x-chunk="dashboard-04-chunk-2">
                <CardHeader className="p-4 lg:p-6">
                  <CardTitle>Blogs</CardTitle>
                  {[blogs[0]].map((blog, index) => (
                    <BlogItem blog={blog} key={index} index={index} />
                  ))}
                </CardHeader>
                <CardContent className="flex justify-end">
                  <Button asChild variant="outline">
                    <Link href={'/listings'}>View More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <Banner />
          </div>
        </Transition>
      </main>
    </Layout>
  )
}
