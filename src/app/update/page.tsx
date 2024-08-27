'use client'

import { useState } from 'react'
import { news } from '@/asset/data/fakeData'
import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import NavigationSection from '@/components/NavigationSection'
import Transition from '@/components/Transition'
import NewsItem from '@/app/update/components/NewsItem'

const Update = () => {
  const languageList = ['Vietnamese', 'English', 'Spanish']
  const [language, setLanguage] = useState(languageList[0])

  return (
    <Layout>
      <Header href="/update" />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4 bg-[#f1f5f9] md:gap-8">
        <Transition>
          <div
            className="flex w-full flex-col items-center justify-center bg-cover bg-center p-16"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914')",
            }}
          >
            <p className="text-xl font-bold text-white">
              It&apos;s always good news when you&apos;re closer to the truth
            </p>
          </div>

          {/* Content */}
          <div className="mx-auto grid w-full grow items-start gap-6 p-4 md:grid-cols-1 lg:w-10/12 lg:grid-cols-[2fr_7fr_3fr]">
            <NavigationSection currentHref="/update" />
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
              <Card x-chunk="dashboard-04-chunk-2" className="bg-[#e2e8f0]">
                <CardHeader className="p-4 lg:p-6">
                  <p>Today 08/08/2024</p>
                </CardHeader>

                <CardContent className="grid gap-10">
                  {news.map((item, index) => (
                    <NewsItem
                      title={item.title}
                      content={item.content}
                      key={index}
                    />
                  ))}
                </CardContent>
              </Card>
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

export default Update
