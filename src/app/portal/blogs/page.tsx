import Link from 'next/link'
import { CirclePlus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { columnsBlog, dataBlog } from '@/app/portal/blogs/data'
import { DataTable } from '@/app/portal/components/data-table'

const Blogs = () => {
  const TAB = {
    all: 'All',
    pending: 'Pending Approval',
  }

  return (
    <div className="rounded p-2 shadow-lg">
      <Tabs defaultValue={TAB.all}>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Blogs</h1>

          <div className="flex">
            <TabsList>
              <TabsTrigger value={TAB.all}>{TAB.all}</TabsTrigger>
              <TabsTrigger value={TAB.pending}>{TAB.pending}</TabsTrigger>
            </TabsList>

            <Button asChild variant="ghost">
              <Link href="/portal/blogs-add">
                <CirclePlus />
              </Link>
            </Button>
          </div>
        </div>

        <TabContent value={TAB.all} />
        <TabContent value={TAB.pending} />
      </Tabs>
    </div>
  )
}

const TabContent = ({ value }: { value: string }) => {
  return (
    <TabsContent value={value}>
      {/* @ts-ignore */}
      <DataTable data={dataBlog} columns={columnsBlog} />
    </TabsContent>
  )
}

export default Blogs
