'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Ellipsis } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export type Blog = {
  id: number
  title: string
  status: string
  updated: string
  edited?: boolean
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
