import Link from 'next/link'
import { CirclePlus, Ellipsis } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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
  const data = [
    { title: 'blog post title', status: 'Unpublished', updated: '10/12/2024' },
    {
      title: 'blog post title',
      status: 'Inquiring to Publish',
      updated: '10/12/2024',
    },
    { title: 'blog post title', status: 'Published', updated: '10/12/2024' },
  ]
  return (
    <TabsContent value={value}>
      <Table>
        <TableCaption />

        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Updated</TableHead>
            <TableHead className="w-[100px]" />
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.updated}</TableCell>
              <TableCell className="">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Ellipsis />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TabsContent>
  )
}

export default Blogs
