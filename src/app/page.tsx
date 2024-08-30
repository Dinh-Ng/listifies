'use client'

import { useState } from 'react'
import Script from 'next/script'
import { news } from '@/asset/data/fakeData'
import { ChevronDown, MapPin } from 'lucide-react'

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
  return (
    <div
      className="flex w-full flex-col items-center justify-center bg-cover bg-center py-16"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914')",
      }}
    >
      {/* <p className="mb-4 text-2xl font-bold text-white">Find your listings</p> */}
      <div className="grid items-center rounded lg:grid-cols-[200px_300px] lg:rounded-sm">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-[56px] w-full justify-start rounded bg-white lg:rounded-l-sm lg:rounded-r-none"
            >
              <ChevronDown className="size-5" />
              <span className="">Home for Sale</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Home for Sale</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Home for Lease</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="mt-4 flex flex-row items-center justify-between rounded bg-white lg:mt-0 lg:rounded-none">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-[200px] justify-start rounded-none"
              >
                <MapPin className="size-5" />
                <span className="">All Locations</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem>USA</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Vietnam</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex flex-row justify-end p-2">
            <Button className="bg-[#7a7a7a]">Search</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
