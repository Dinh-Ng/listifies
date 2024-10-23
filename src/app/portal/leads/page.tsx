'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import { CirclePlus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import PortalBase from '@/app/portal/base'

import { DataTable } from '../components/data-table'
import { columnLead, dataLead } from './data'

type Checked = DropdownMenuCheckboxItemProps['checked']

const Leads = () => {
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
        {/* @ts-ignore */}
        <DataTable data={dataLead} columns={columnLead} />
      </div>
    </PortalBase>
  )
}

export default Leads
