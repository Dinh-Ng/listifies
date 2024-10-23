'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Ellipsis } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export type Listings = {
  id: number
  address: string
  price: string
  status: string
  updated: string
  edited: string
}

export const columnListings: ColumnDef<Listings>[] = [
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'updated',
    header: 'Updated',
  },
  {
    accessorKey: 'edited',
    header: '',
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Ellipsis />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Add Open House</DropdownMenuItem>
            <DropdownMenuItem>Update Status</DropdownMenuItem>
            <DropdownMenuItem>Edit Listing</DropdownMenuItem>
            <DropdownMenuItem>View Listing</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export const dataListing = [
  {
    address: '',
    price: '',
    status: 'New',
    updated: '10/12/2024',
  },
  {
    address: '',
    price: '',
    status: 'Interesting',
    updated: '10/12/2024',
  },
  {
    address: '',
    price: '',
    status: 'Closed',
    updated: '10/12/2024',
  },
]
