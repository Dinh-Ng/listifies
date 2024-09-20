/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { listings } from '@/asset/data/fakeData'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import Transition from '@/components/Transition'
import ListingItem from '@/app/listings/components/listingItem'

export default function Agent() {
  const [isForSale, setIsForSale] = useState(true)

  return (
    <Layout>
      <Header href="/[slug]" />
      <main className="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4 md:gap-8">
        <Transition>
          <div
            className="relative w-full bg-cover bg-center py-24"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914')",
            }}
          >
            <div className="absolute flex w-full justify-center px-2">
              <div className="w-full lg:w-10/12">
                <div className="flex">
                  <img
                    src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
                    className="size-36 rounded-full"
                    alt="Avatar"
                  />
                  <div className="ml-4 mt-2 text-white">
                    <p className="font-bold">Realtor Name</p>
                    <p>Real Estate Agent</p>
                    <p>Licens# 12345 • Contact Info</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 w-full self-center lg:w-10/12">
            <div className="grid gap-4 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_350px]">
              <div className="px-2">
                <div className="my-4 flex items-center">
                  <Button
                    variant="ghost"
                    className={(isForSale ? 'font-bold' : '') + ' text-lg'}
                    onClick={() => setIsForSale(true)}
                  >
                    Home For Sale
                  </Button>
                  <p> | </p>
                  <Button
                    variant="ghost"
                    className={(!isForSale ? 'font-bold' : '') + ' text-lg'}
                    onClick={() => setIsForSale(false)}
                  >
                    Home For Lease
                  </Button>
                </div>
                {listings.map((item, index) => (
                  <ListingItem
                    key={index}
                    index={index}
                    listing={item}
                    href={isForSale ? '/home-for-sale' : '/home-for-lease'}
                  />
                ))}
              </div>

              <AuthorInfo />
            </div>
          </div>
          <Footer />
        </Transition>
      </main>
    </Layout>
  )
}

function AuthorInfo() {
  return (
    <aside className="">
      <Card className="mb-10 items-center space-x-4 rounded border-none p-4 shadow-lg">
        <div className="flex">
          <img
            src="https://placehold.co/100x100"
            alt="Author Image"
            className="size-16 rounded-full"
          />
          <div className="ml-2 flex flex-col justify-center text-sm">
            <h2 className="text-xl font-bold">Author Name</h2>
            <p>Job Title</p>
          </div>
        </div>

        <div className="mt-2">
          <p>License#: 1234567</p>
          <p>Mail: author@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div className="mt-2 flex w-full gap-2">
          <Button variant={'outline'}>Message</Button>
          <Button variant={'outline'}>Call</Button>
        </div>
      </Card>
      <Banner />
    </aside>
  )
}
