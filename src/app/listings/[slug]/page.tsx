/* eslint-disable @next/next/no-img-element */
import { FaPhoneAlt, FaUser } from 'react-icons/fa'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Banner from '@/components/banner'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import Transition from '@/components/Transition'
import { Button } from '@/components/ui/button'

export default function DetailListing() {
  return (
    <Layout>
      <Header href={'/listings'} />
      {/*<div className="mx-auto">*/}
      {/* Main Content */}
      <main className="bg-muted/40 w-full py-2">
        <Transition>
          <div className="flex h-32 w-full flex-col items-center px-2 pt-2">
            <div className="w-full px-2 lg:w-10/12 lg:px-4">
              <div className="grid gap-4 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_350px]">
                <div className="">
                  <h1 className="mb-2 text-3xl font-bold">Properties</h1>

                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle>Home Address</CardTitle>
                      <CardDescription>
                        {/* <div > */}
                        {/* </div> */}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="mb-4 flex justify-between text-lg">
                        <p>1000$ | #bed | #bath</p>
                        <p className="rounded-xl bg-[#f7efe3] px-4 py-2 font-bold italic text-[#bd7f21]">
                          For Sale
                        </p>
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

                      <div className="grid gap-2 lg:grid-cols-2">
                        <div>
                          <p className="my-2 italic underline decoration-solid">
                            Contact Info
                          </p>
                          <p className="flex items-center">
                            <FaUser className="mr-2" /> Nicole
                          </p>
                          <p className="flex items-center">
                            <FaPhoneAlt className="mr-2" /> (321) 123-4567
                          </p>
                          {/* <p>Email: micole@gmail.com</p> */}
                        </div>
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
                        {/* <div className="grid grid-cols-3 gap-1">
                          <div className="col-span-3 w-full">
                            <img
                              src="https://placehold.co/500x150"
                              alt="Image"
                              className="w-full"
                            />
                          </div>
                          <div className="">
                            <img
                              src="https://placehold.co/250x150"
                              alt="Image"
                              className="w-full"
                            />
                          </div>
                          <div className="">
                            <img
                              src="https://placehold.co/250x150"
                              alt="Image"
                              className="w-full"
                            />
                          </div>
                          <div className="">
                            <img
                              src="https://placehold.co/250x150"
                              alt="Image"
                              className="w-full"
                            />
                          </div>
                        </div> */}
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
      <Card className="mb-10 items-center space-x-4 rounded border p-4">
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

        <div className="mt-2 flex gap-2">
          <Button variant={'outline'}>Message</Button>
          <Button variant={'outline'}>Call</Button>
        </div>
      </Card>
      <Banner />
    </aside>
  )
}
