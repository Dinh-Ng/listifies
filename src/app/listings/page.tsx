/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { listings } from '@/asset/data/fakeData'
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
import Transition from '@/components/Transition'
import ListingItem from '@/app/listings/components/listingItem'

export default function Listings() {
  const locationList = ['Vietnam', 'USA', 'Spain']
  const [location, setLocation] = useState(locationList[0])

  return (
    <Layout>
      <Header href={'/listings'} />
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
                  <CardTitle>Home for Sale</CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant={'outline'} className="justify-between">
                        {location}
                        <ChevronDown />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[150px]" align="end">
                      <DropdownMenuRadioGroup
                        value={location}
                        onValueChange={setLocation}
                      >
                        {locationList.map((item) => (
                          <DropdownMenuRadioItem key={item} value={item}>
                            {item}
                          </DropdownMenuRadioItem>
                        ))}
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent className="p-4">
                  {listings.map((listing, index) => (
                    <ListingItem listing={listing} key={index} index={index} />
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
