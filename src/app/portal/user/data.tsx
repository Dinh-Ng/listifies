'use client'

import Image from 'next/image'
import { ColumnDef } from '@tanstack/react-table'
import { Ellipsis } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export type User = {
  id: number
  avatar: string
  name: string
  email: string
  status: string
  updated: string
  edited: boolean
}

export const columnsUser: ColumnDef<User>[] = [
  {
    accessorKey: 'avatar',
    cell: ({ row }) => {
      return (
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={row.getValue('avatar')}
            alt="avatar"
            className="size-12 rounded-full"
          />
        </div>
      )
    },
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
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
            <DropdownMenuItem>Update Status</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export const dataUser = [
  {
    avatar: 'https://i.pravatar.cc/150?img=3',
    name: 'John Doe',
    email: 'john.doe@example.com',
    status: 'Active',
    updated: '10/12/2024',
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=5',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    status: 'Inactive',
    updated: '10/12/2024',
  },
]
