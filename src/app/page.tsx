import Link from 'next/link'
import { blogs, listings } from '@/asset/data/fakeData'
import { ChevronDown, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Banner from '@/components/banner'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import Transition from '@/components/Transition'

import BlogItem from './blogs/components/blogItem'
import ListingItem from './listings/components/listingItem'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <Layout>
      <Header href={'/'} />
      <main className="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4 md:gap-8">
        <Transition>
          {/* Hero Section */}
          <div
            className="flex w-full flex-col items-center justify-center bg-cover bg-center py-16"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914')",
            }}
          >
            <p className="mb-4 text-2xl font-bold text-white">
              Find your listings
            </p>
            <div className="grid gap-px bg-[rgba(0,0,0,0.4)] md:grid-cols-[200px] lg:grid-cols-[200px_200px_200px] lg:rounded-full">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-[200px] rounded-b-none rounded-t-xl bg-white lg:rounded-l-full lg:rounded-r-none"
                  >
                    <span className="w-full">Home for Sale</span>
                    <ChevronDown className="size-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  <DropdownMenuItem>Home for Sale</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Home for Lease</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-[200px] rounded-none bg-white"
                  >
                    <span className="w-full">All Locations</span>
                    <ChevronDown className="size-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  <DropdownMenuItem>USA</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Vietnam</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                className="relative w-[200px] rounded-b-xl rounded-t-none text-[#cecdcd] lg:rounded-l-none lg:rounded-r-full"
                variant="ghost"
              >
                Search
                <Search className="absolute right-4 size-4" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="mx-auto grid w-full items-start gap-6 p-4 md:grid-cols-[1fr_280px] lg:w-10/12 lg:grid-cols-[1fr_350px]">
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
                    <Link href={'/listings'}>View More Properties</Link>
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
                    <Link href={'/blogs'}>View More Blog Posts</Link>
                  </Button>
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
