'use client'

import { useState } from 'react'
import { news } from '@/asset/data/fakeData'
import { ChevronDown, MapPin, Share2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import NavigationSection from '@/components/NavigationSection'
import Transition from '@/components/Transition'

export default function Home() {
  const languageList = ['Vietnamese', 'English', 'Spanish']
  const [language, setLanguage] = useState(languageList[0])

  return (
    <Layout>
      <Header href={'/'} />
      <main className="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4 md:gap-8">
        <Transition>
          <HeroSection />

          {/* Content */}
          <div className="mx-auto grid w-full grow items-start gap-6 p-4 md:grid-cols-1 lg:w-10/12 lg:grid-cols-[2fr_7fr_3fr]">
            <NavigationSection currentHref="/" />
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h1 className={'text-xl font-semibold'}>Updates</h1>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={'outline'} className="justify-between">
                      {language}
                      <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[150px]" align="end">
                    <DropdownMenuRadioGroup
                      value={language}
                      onValueChange={setLanguage}
                    >
                      {languageList.map((item) => (
                        <DropdownMenuRadioItem key={item} value={item}>
                          {item}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Card x-chunk="dashboard-04-chunk-2">
                <CardHeader className="p-4 lg:p-6">
                  <p>Today 08/08/2024</p>
                  {/* {[listings[0]].map((listing, index) => (
                    <ListingItem listing={listing} index={index} />
                  ))} */}
                </CardHeader>

                <CardContent className="grid gap-10">
                  {news.map((item, index) => (
                    <NewsItem
                      title={item.title}
                      content={item.content}
                      key={index}
                    />
                  ))}
                  {/* <Button asChild variant="outline">
                    <Link href={'/listings'}>View More Properties</Link>
                  </Button> */}
                </CardContent>
              </Card>

              {/* <Card x-chunk="dashboard-04-chunk-2">
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
              </Card> */}
            </div>
            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Today’s Rate</CardTitle>
                </CardHeader>
                <CardContent className="h-40" />
              </Card>
              <Banner />
            </div>
          </div>

          <Footer />
        </Transition>
      </main>
    </Layout>
  )
}

const NewsItem = ({
  title,
  content,
  amountOfWords = 30,
}: {
  title: string
  content: string
  amountOfWords?: number
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const splittedText = content.split(' ')
  const itCanOverflow = splittedText.length > amountOfWords
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(' ')
    : content
  const endText = splittedText.slice(amountOfWords - 1).join(' ')

  // const handleKeyboard = (e) => {
  //   if (e.code === 'Space' || e.code === 'Enter') {
  //     setIsExpanded(!isExpanded)
  //   }
  // }

  return (
    <div className="">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xl font-bold">{title}</p>
        <Button variant={'ghost'}>
          <Share2 className="mr-2" />
          Share
        </Button>
      </div>
      <p id="read-more-text">
        {beginText}
        {itCanOverflow && (
          <>
            {!isExpanded && <span>... </span>}
            <span
              className={`${!isExpanded && 'hidden'}`}
              aria-hidden={!isExpanded}
            >
              {endText}
            </span>
            <span
              className="ml-2 text-violet-400"
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              aria-controls={'read-more-text'}
              // onKeyDown={handleKeyboard}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'show less' : 'show more'}
            </span>
          </>
        )}
      </p>
    </div>
  )
}

const HeroSection = () => {
  return (
    <div
      className="flex w-full flex-col items-center justify-center bg-cover bg-center py-16"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914')",
      }}
    >
      {/* <p className="mb-4 text-2xl font-bold text-white">Find your listings</p> */}
      <div className="grid items-center gap-px bg-white md:grid-cols-[200px] lg:grid-cols-[200px_200px_200px] lg:rounded-sm">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="w-[200px] rounded-b-none rounded-t-xl bg-white lg:rounded-l-sm lg:rounded-r-none"
            >
              <ChevronDown className="size-5" />
              <span className="w-full">Home for Sale</span>
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
            <Button variant="ghost" className="w-[200px] rounded-none bg-white">
              <MapPin className="size-5" />
              <span className="w-full">All Locations</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuItem>USA</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Vietnam</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* <Button
          className="relative w-[200px] rounded-b-xl rounded-t-none text-[#cecdcd] lg:rounded-l-none lg:rounded-r-full"
          variant="ghost"
        >
          Search
          <Search className="absolute right-4 size-4" />
        </Button> */}
        <div className="flex flex-row justify-end p-2">
          <Button>Search</Button>
        </div>
      </div>
    </div>
  )
}
