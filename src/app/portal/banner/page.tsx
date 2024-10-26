import Link from 'next/link'
import { CirclePlus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { columnsBanner, dataBanner } from '@/app/portal/banner/data'
import DataTable from '@/app/portal/components/data-table'

const Banner = () => {
  const TAB = {
    active: 'Active',
    inactive: 'Inactive',
  }

  return (
    <div className="rounded p-2 shadow-lg">
      <Tabs defaultValue={TAB.active}>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Banner</h1>

          <div className="flex">
            <TabsList>
              <TabsTrigger value={TAB.active}>{TAB.active}</TabsTrigger>
              <TabsTrigger value={TAB.inactive}>{TAB.inactive}</TabsTrigger>
            </TabsList>

            <Button asChild variant="ghost">
              <Link href="/portal/banner-add">
                <CirclePlus />
              </Link>
            </Button>
          </div>
        </div>

        <TabContent value={TAB.active} />
        <TabContent value={TAB.inactive} />
      </Tabs>
    </div>
  )
}

const TabContent = ({ value }: { value: string }) => {
  return (
    <TabsContent value={value}>
      {/* @ts-ignore */}
      <DataTable data={dataBanner} columns={columnsBanner} />
    </TabsContent>
  )
}

export default Banner
