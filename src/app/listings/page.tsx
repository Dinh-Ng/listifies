/* eslint-disable @next/next/no-img-element */
'use client'

import { LinkMapping } from '@/asset/constant'
import { listings } from '@/asset/data/fakeData'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import ListingItem from '@/app/listings/components/listingItem'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import NavigationSection from '@/components/NavigationSection'
import Transition from '@/components/Transition'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const Listings = () => {
  const href = '/'
  const locationList = ['All Locations', 'Vietnam', 'USA', 'Spain']
  const [location, setLocation] = useState(locationList[0])

  return (
    <Layout>
      <Header href={href} />
      <main className="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4 md:gap-8">
        <Transition>
          <img
            alt="hero_img"
            className="mb-6 h-44 w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
          />
          <div className="mx-auto grid w-full grow items-start gap-6 md:grid-cols-1 lg:w-10/12 lg:grid-cols-[2fr_7fr_3fr]">
            <NavigationSection currentHref={href} />
            <div className="grid gap-6">
              <CardHeader className="flex flex-row items-center justify-between p-0">
                <CardTitle>
                  {LinkMapping.get(href) ?? 'Home for Sale'}
                </CardTitle>
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
              <Card x-chunk="dashboard-04-chunk-2">
                <CardContent className="p-4">
                  {/* {listings.map((listing, index) => (
                    <ListingItem listing={listing} key={index} index={index} href={href} />
                  ))} */}
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

export default Listings
