'use client'

import { useRef, useState } from 'react'
import Script from 'next/script'
import { news } from '@/asset/data/fakeData'
import { ChevronDown } from 'lucide-react'

import { useToast } from '@/hooks/use-toast'
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
          <div className="mx-auto grid w-full grow items-start gap-6 p-4 md:grid-cols-1 lg:w-10/12 lg:grid-cols-[9fr_3fr]">
            {/* <NavigationSection currentHref="/" /> */}
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h1 className={'text-xl font-semibold'}>Featured Properties</h1>
              </div>
              <Card
                x-chunk="dashboard-04-chunk-2"
                className="border-none shadow-lg"
              >
                <CardHeader className="p-4 lg:p-6" />

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
  const { toast } = useToast()

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
      className="flex h-[50vh] w-full flex-col items-start justify-center bg-cover bg-center px-8 md:px-16 lg:px-24"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914')",
      }}
    >
      <p className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Your Home. Your Mortgage. Our Priority</p>
      <div className="w-full max-w-xs">
        <DropdownMenu open={isOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-[56px] w-full justify-between rounded bg-zinc-800/80 text-white hover:bg-zinc-800/90 hover:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <span className="text-lg">I want to</span>
              <ChevronDown className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="w-full border-zinc-700 bg-zinc-800/90 text-white"
          >
            <DropdownMenuCheckboxItem
              checked={status === 'sale'}
              onCheckedChange={() => {
                setStatus('sale')
                handleLeave()
              }}
              className="focus:bg-zinc-700 focus:text-white"
            >
              Home for Sale
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator className="bg-zinc-700" />
            <DropdownMenuCheckboxItem
              checked={status === 'lease'}
              onCheckedChange={() => {
                setStatus('lease')
                handleLeave()
              }}
              className="focus:bg-zinc-700 focus:text-white"
            >
              Home for Lease
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
