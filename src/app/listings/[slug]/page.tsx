/* eslint-disable @next/next/no-img-element */
import { Mail, Phone } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import Banner from '@/components/banner'
import Header from '@/components/Header'
import Layout from '@/components/layout'

export default function DetailListing() {
  return (
    <Layout>
      <Header href={'/listings'} />
      {/*<div className="mx-auto">*/}
      {/* Main Content */}
      <main className="bg-muted/40 w-full py-2">
        <div className="flex h-32 w-full flex-col items-center px-2 pt-2">
          <div className="w-full px-4 md:px-6 lg:w-10/12">
            <div className="grid gap-4 md:grid-cols-[280px_1fr] lg:grid-cols-[350px_1fr]">
              <AuthorInfo />
              <div className="">
                <h1 className="mb-2 text-3xl font-bold">Properties</h1>

                <Card>
                  <CardHeader>
                    <CardTitle>Home Address</CardTitle>
                    <CardDescription>
                      <div className="flex justify-between text-lg">
                        <p>1000$ | #bed | #bath</p>
                        <Collapsible className='flex flex-col items-end justify-end'>
                          <CollapsibleTrigger>Contact Info</CollapsibleTrigger>
                          <CollapsibleContent>
                            <Card className="p-2">
                              <p>Name: Nicole</p>
                              <p>Phone: 0123456789</p>
                              <p>Email: micole@gmail.com</p>
                            </Card>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <h1 className="mb-3">Description</h1>

                    <div class="grid grid-cols-3 gap-1">
                      <div class="col-span-3 w-full">
                        <img
                          src="https://placehold.co/500x150"
                          alt="Image"
                          className="w-full"
                        />
                      </div>
                      <div class="">
                        <img
                          src="https://placehold.co/250x150"
                          alt="Image"
                          className=""
                        />
                      </div>
                      <div class="">
                        <img
                          src="https://placehold.co/250x150"
                          alt="Image"
                          className=""
                        />
                      </div>
                      <div class="">
                        <img
                          src="https://placehold.co/250x150"
                          alt="Image"
                          className=""
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/*</div>*/}
    </Layout>
  )
}

function AuthorInfo() {
  return (
    <aside className=" bg-white">
      <Card className="mb-4 items-center space-x-4 rounded border p-4">
        <div className="flex">
          <img
            src="https://placehold.co/100x100"
            alt="Author Image"
            className="size-16 rounded-full"
          />
          <div className="ml-2 text-sm">
            <h2 className="text-xl font-bold">Author Name</h2>
            <p>Job Title</p>
            <p>License#: 1234567</p>
          </div>
        </div>

        <div className="flex">
          <Mail />
          <p className="ml-2">author@gmail.com</p>
        </div>
        <div className="flex">
          <Phone />
          <p className="ml-2">(123) 456-7890</p>
        </div>
      </Card>
      <Banner />
    </aside>
  )
}
