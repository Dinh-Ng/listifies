'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Ellipsis } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'

export type Question = {
  id: number
  question: string
  answer: string
  date: string
  edited?: boolean
}

export const columnsQuestion: ColumnDef<Question>[] = [
  {
    accessorKey: 'question',
    header: 'Question',
  },
  {
    accessorKey: 'answer',
    header: 'Answer',
  },
  {
    accessorKey: 'date',
    header: 'Date',
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
            <DropdownMenuItem asChild><Link href={'/portal/question-answer'}>Answer</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export const dataQuestion = [
  {
    question: 'How',
    answer: 'No',
    date: '11/11/2024'
  },
  {
    question: '',
    answer: 'Yes',
    date: '',
  }
]
