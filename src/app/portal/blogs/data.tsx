'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Timestamp } from 'firebase/firestore'
import { Ellipsis } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export type Blog = {
  id: string
  title?: string
  status?: string
  updatedAt?: Timestamp
  edited?: boolean
  userId?: string
  userName?: string
  tags?: string
  content?: string
}

export const columnsBlog: ColumnDef<Blog>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'updatedAt',
    header: 'Updated',
    cell: ({ row }) => {
      const updatedAt = (
        row.getValue('updatedAt') as { toDate(): Date }
      )?.toDate()
      if (updatedAt instanceof Date) {
        return <div>{updatedAt.toLocaleDateString('en-US')}</div>
      }
      return <div>Invalid Date</div>
    },
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
            <DropdownMenuItem>Update Post</DropdownMenuItem>
            <DropdownMenuItem>View Post</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export const dataBlog = [
  {
    title: 'blog post title',
    status: 'Unpublished',
    updated: '10/12/2024',
  },
  {
    title: 'blog post title',
    status: 'Inquiring to Publish',
    updated: '10/12/2024',
  },
  {
    title: 'blog post title',
    status: 'Published',
    updated: '10/12/2024',
  },
]
