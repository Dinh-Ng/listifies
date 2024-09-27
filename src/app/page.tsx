'use client'

import { useRef, useState } from 'react'
import Script from 'next/script'
import { news } from '@/asset/data/fakeData'
import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import NavigationSection from '@/components/NavigationSection'
import Transition from '@/components/Transition'
import NewsItem from '@/app/update/components/NewsItem'

export default function Home() {
  const languageList = ['Vietnamese', 'English', 'Spanish']
  const [language, setLanguage] = useState(languageList[0])

  return (
    <Layout>
      <Script src="https://www.loanfactory.com/sdk.js?owner=phungpham@outlook.com" />
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
              <Card
                x-chunk="dashboard-04-chunk-2"
                className="border-none shadow-lg"
              >
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
            </div>
            <div>
              <Card className="mb-6 border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Today’s Rate</CardTitle>
                </CardHeader>
                <CardContent className="h-40">
                  <div
                    data-ui-widget="today_rate"
                    data-purpose="PM"
                    data-sub-header-text="320000"
                    data-lead-info-required="1"
                    data-lead-info-disclaimer="These rates are intended for realtors and loan officers only. For information purposes only and does not constitute a loan approval or commitment to lend. Rates are subject to change without notice."
                  ></div>
                </CardContent>
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

const HeroSection = () => {
  const [status, setStatus] = useState<'sale' | 'lease'>('sale')
  const [isOpen, setIsOpen] = useState(false)

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 300)
  }

  return (
    <div
      className="flex h-[50vh] w-full flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914')",
      }}
    >
      <p className="mb-4 text-2xl font-bold text-white">I AM LOOKING AT</p>
      <div
        className={
          'grid items-center rounded lg:grid-cols-2 lg:rounded-sm gap-1 ' +
          'lg:w-1/2 justify-center md:w-[70%] w-[90%]'
        }
      >
        <DropdownMenu open={isOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={
                'h-[56px] w-full justify-start rounded bg-white lg:rounded-sm ' +
                'hover:bg-white focus-visible:ring-0 focus-visible:ring-offset-0 ' +
                'w-[90vw] md:w-[70vw] lg:w-full'
              }
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <ChevronDown className="size-5" />
              <span className="">
                {status === 'sale' ? 'Home for Sale' : 'Home for Lease'}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="w-[90vw] md:w-[70vw] lg:w-[20vw]"
          >
            {/* <DropdownMenuItem>Home for Sale</DropdownMenuItem>
            <DropdownMenuItem>Home for Lease</DropdownMenuItem> */}
            <DropdownMenuCheckboxItem
              checked={status === 'sale'}
              onCheckedChange={() => {
                setStatus('sale')
                handleLeave()
              }}
            >
              Home for Sale
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={status === 'lease'}
              onCheckedChange={() => {
                setStatus('lease')
                handleLeave()
              }}
            >
              Home for Lease
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="mt-4 flex flex-row items-center justify-between rounded bg-white p-2 lg:mt-0 lg:rounded-sm">
          <Input className="" placeholder="All Locations" />
          {/* <div className="flex flex-row justify-end p-2"> */}
          <Button className="ml-2 bg-zinc-800 lg:w-[8vw]">Search</Button>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
