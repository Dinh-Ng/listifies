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
import DataTable from '@/app/portal/components/data-table'

import { columnListings, dataListing } from './data'

type Props = {
  isSale: boolean
}

type Checked = DropdownMenuCheckboxItemProps['checked']

const BaseListings = ({ isSale }: Props) => {
  const [showListed, setShowListed] = useState<Checked>(true)
  const [showPending, setShowPending] = useState<Checked>(true)
  const [showUnavailable, setShowUnavailable] = useState<Checked>(true)

  const filterTitle = [
    showListed ? 'Listed' : '',
    showPending ? 'Pending' : '',
    showUnavailable ? 'Unavailable' : '',
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
            checked={showListed}
            onCheckedChange={setShowListed}
          >
            Listed
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPending}
            onCheckedChange={setShowPending}
          >
            Pending
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showUnavailable}
            onCheckedChange={setShowUnavailable}
          >
            Unavailable
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="ghost">
        <Link href={`/portal/listings-add/${isSale ? 'sales' : 'lease'}`}>
          <CirclePlus />
        </Link>
      </Button>
    </div>
  )

  return (
    <PortalBase title={`HOME FOR ${isSale ? 'SALES' : 'LEASE'}`} rightAction={<RightAction />}>
      <div>
        {/* @ts-ignore */}
        <DataTable data={dataListing} columns={columnListings} />
      </div>
    </PortalBase>
  )
}

export default BaseListings
