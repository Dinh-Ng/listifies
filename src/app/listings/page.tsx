import { listings } from '@/asset/data/fakeData'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Banner from '@/components/banner'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import Transition from '@/components/Transition'
import ListingItem from '@/app/listings/components/listingItem'

export default function Listings() {
  return (
    <Layout>
      <Header href={'/listings'} />
      <main className="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4 p-4 md:gap-8 md:px-6">
        <Transition>
          <div className="mx-auto grid w-full items-start gap-6 md:grid-cols-[1fr_280px] lg:w-10/12 lg:grid-cols-[1fr_350px]">
            <div className="grid gap-6">
              <Card x-chunk="dashboard-04-chunk-2">
                <CardHeader className="p-4">
                  <CardTitle>Properties</CardTitle>
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
        </Transition>
      </main>
    </Layout>
  )
}
