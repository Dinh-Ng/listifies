'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import { CirclePlus, Ellipsis } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
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
import PortalBase from '@/app/portal/base'

type Checked = DropdownMenuCheckboxItemProps['checked']

const Leads = () => {
  const data = [
    {
      title: 'Lead',
      phone: '+0987654321',
      status: 'New',
      updated: '10/12/2024',
    },
    {
      title: 'Lead',
      phone: '+0987654321',
      status: 'Interesting',
      updated: '10/12/2024',
    },
    {
      title: 'Lead',
      phone: '+0987654321',
      status: 'Closed',
      updated: '10/12/2024',
    },
  ]

  const [showNew, setShowNew] = useState<Checked>(true)
  const [showInterested, setShowInterested] = useState<Checked>(true)
  const [showClosed, setShowClosed] = useState<Checked>(true)

  const filterTitle = [
    showNew ? 'New' : '',
    showInterested ? 'Interested' : '',
    showClosed ? 'Closed' : '',
  ]
    .filter(Boolean)
    .join(' / ')

  const RightAction = () => (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{filterTitle}</Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuCheckboxItem
            checked={showNew}
            onCheckedChange={setShowNew}
          >
            New
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showInterested}
            onCheckedChange={setShowInterested}
          >
            Interested
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showClosed}
            onCheckedChange={setShowClosed}
          >
            Closed
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="ghost">
        <Link href="/portal/leads-add">
          <CirclePlus />
        </Link>
      </Button>
    </div>
  )

  return (
    <PortalBase title="My Leads" rightAction={<RightAction />}>
      <div>
        <Table>
          <TableCaption />

          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Updated</TableHead>
              <TableHead className="w-[100px]" />
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.updated}</TableCell>
                <TableCell className="">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Ellipsis />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Add Note</DropdownMenuItem>
                      <DropdownMenuItem>Update Status</DropdownMenuItem>
                      <DropdownMenuItem>Edit Lead</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </PortalBase>
  )
}

export default Leads
