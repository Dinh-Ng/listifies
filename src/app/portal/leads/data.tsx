'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Ellipsis } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export type Leads = {
  id: number
  name: string
  phone: string
  status: string
  updated: string
  edited: boolean
}

export const columnLead: ColumnDef<Leads>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
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
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export const dataLead = [
  {
    name: 'Lead',
    phone: '+0987654321',
    status: 'New',
    updated: '10/12/2024',
  },
  {
    name: 'Lead',
    phone: '+0987654321',
    status: 'Interesting',
    updated: '10/12/2024',
  },
  {
    name: 'Lead',
    phone: '+0987654321',
    status: 'Closed',
    updated: '10/12/2024',
  },
]
