/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { LinkMapping, linkType } from '@/asset/constant'
import { blogs } from '@/asset/data/fakeData'
import {
  CalendarDays,
  ChevronLeft,
  CircleUserRound,
  Clock,
  Phone,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import NavigationSection from '@/components/NavigationSection'
import Transition from '@/components/Transition'

export default function DetailListing({ href }: { href: linkType }) {
  return (
    <Layout>
      <Header href={'/[slug]'} />
      {/*<div className="mx-auto">*/}
      {/* Main Content */}
      <main className="bg-muted/40 w-full py-2">
        <Transition>
          <img
            alt="hero_img"
            className="mb-6 h-44 w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
          />
          <div className="flex w-full flex-col items-center px-2 pt-2">
            <div className="w-full px-2 lg:w-10/12 lg:px-4">
              <Button variant="ghost" className="px-0 lg:ml-[14vw]">
                <Link href={href} className="row flex items-center">
                  <ChevronLeft />
                  <p className="text-lg">
                    {LinkMapping.get(href) ?? 'Home For Sale'}
                  </p>
                </Link>
              </Button>
              <div className="grid items-start gap-4 md:grid-cols-1 lg:grid-cols-[2fr_7fr_3fr]">
                <NavigationSection currentHref={href} />
                <div className="">
                  {/* <h1 className="mb-2 text-3xl font-bold">Properties</h1> */}

                  <Card className="border-none shadow-lg">
                    <CardHeader className="p-4 ">
                      {/* <CardTitle>Home Address</CardTitle>
                      <CardDescription /> */}
                      <div className="flex-row justify-between text-lg font-semibold lg:flex lg:text-xl">
                        <p className="mb-4 leading-none tracking-tight lg:mb-0">
                          Property Type • $300,000
                        </p>
                        <p>City, State Zip</p>
                      </div>

                      <span className="mb-4 flex text-base font-bold">
                        <p className="rounded-r-lg">#beds</p>
                        <p className="px-2"> • </p>
                        <p>#bath</p>
                        <p className="px-2"> • </p>
                        <p>## sq feet</p>
                      </span>

                      <div className="flex">
                        <ContactInfoButton />
                        <p className="px-2"> • </p>
                        <OpenHouseButton />
                        <p className="px-2"> • </p>
                        <MoreInfoButton />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="lg:px-10">
                        <Carousel>
                          <CarouselContent>
                            {blogs.map((item, index) => (
                              <CarouselItem key={index}>
                                <img
                                  src={item.imageUrl}
                                  alt="Image"
                                  className="w-full"
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <div className="hidden lg:flex">
                            <>
                              <CarouselPrevious />
                              <CarouselNext />
                            </>
                          </div>
                        </Carousel>
                      </div>

                      <div className="mb-4">
                        <h1 className="mb-3 text-xl">Description:</h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ab, exercitationem tenetur voluptates maiores
                          neque corrupti culpa vel officiis! Quam corrupti
                          maiores ut inventore sapiente fugiat ad libero
                          cupiditate rerum voluptatibus.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <AuthorInfo />
              </div>
            </div>
          </div>

          <Footer />
        </Transition>
      </main>
      {/*</div>*/}
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
            <Link href={'/agent/0'}>
              <h2 className="text-xl font-bold">Author Name</h2>
            </Link>
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

const ContactInfoButton = () => (
  <Dialog>
    <DialogTrigger className="text-blue-500">Contact Info</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Contact Info</DialogTitle>
      </DialogHeader>

      <DialogDescription>
        <div className="my-4 flex items-center">
          <CircleUserRound className="mr-2" />
          Phung Pham
        </div>
        <div className="flex items-center">
          <Phone className="mr-2" />
          (123) 456-7890
        </div>
      </DialogDescription>
    </DialogContent>
  </Dialog>
)

const OpenHouseButton = () => (
  <Dialog>
    <DialogTrigger className="text-blue-500">Open House</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Open House Info</DialogTitle>
      </DialogHeader>

      <DialogDescription>
        <div className="my-4 flex items-center">
          <CalendarDays className="mr-2" />
          Saturday, August 15th, 2024
        </div>
        <div className="flex items-center">
          <Clock className="mr-2" />
          11:00am - 1:30pm
        </div>
      </DialogDescription>
    </DialogContent>
  </Dialog>
)

const MoreInfoButton = () => (
  <Dialog>
    <DialogTrigger className="text-blue-500">More Details</DialogTrigger>
    <DialogContent className="flex h-[90vh] w-[90vw] flex-col">
      <DialogHeader>
        <DialogTitle>Information</DialogTitle>
        <DialogDescription />
      </DialogHeader>

      <iframe
        className="size-full"
        src="https://property.listreports.com/YTcSSIYMCr/10711-lacaille-ln-richmond-tx-77406?premium&v1725105492209"
      />
    </DialogContent>
  </Dialog>
)
