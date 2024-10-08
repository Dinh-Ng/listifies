/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
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
import Header from '@/components/Header'
import Layout from '@/components/layout'
import Transition from '@/components/Transition'

export default function DetailListing() {
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
              <Button variant="ghost" className="px-0">
                <Link href="/listings" className="row flex items-center">
                  <ChevronLeft />
                  <p className="text-lg">Home For Sale</p>
                </Link>
              </Button>
              <div className="grid gap-4 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_350px]">
                <div className="">
                  {/* <h1 className="mb-2 text-3xl font-bold">Properties</h1> */}

                  <Card>
                    <CardHeader className="p-4 ">
                      {/* <CardTitle>Home Address</CardTitle>
                      <CardDescription /> */}
                      <div className="flex-row justify-between text-2xl font-semibold lg:flex">
                        <p className="mb-4 leading-none tracking-tight lg:mb-0">
                          Property Type • $300,000
                        </p>
                        <p>City, State Zip</p>
                      </div>

                      <div className="mb-4 flex justify-between text-lg">
                        <p>#beds • #bath • ## sq feet</p>
                      </div>

                      <div className="flex">
                        <ContactInfoButton />
                        <p className="px-2"> • </p>
                        <OpenHouseButton />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="grid gap-2 lg:grid-cols-2">
                        <div className="lg:px-10">
                          <Carousel>
                            <CarouselContent>
                              {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                  <img
                                    src="https://placehold.co/150x150"
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
