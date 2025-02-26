'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getAllHomesForLease, getAllHomesForSale } from '@/utils/firestore'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import { CirclePlus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Loading from '@/components/Loading'
import PortalBase from '@/app/portal/base'
import DataTable from '@/app/portal/components/data-table'

import { Step1Data } from '../listings-add/Step1'
import { Step2Data } from '../listings-add/Step2'
import { Step3Data } from '../listings-add/Step3'
import { columnListings } from './data'

type Props = {
  isSale: boolean
}

type Checked = DropdownMenuCheckboxItemProps['checked']

export type ListingType = Step1Data & Step2Data & Step3Data & { id: string }

const BaseListings = ({ isSale }: Props) => {
  const [showListed, setShowListed] = useState<Checked>(true)
  const [showPending, setShowPending] = useState<Checked>(true)
  const [showUnavailable, setShowUnavailable] = useState<Checked>(true)
  const [listings, setListings] = useState<ListingType[]>()

  const fetchData = async () => {
    let data
    if (isSale) {
      data = await getAllHomesForSale()
    } else {
      data = await getAllHomesForLease()
    }
    setListings(data)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    <PortalBase
      title={`HOME FOR ${isSale ? 'SALES' : 'LEASE'}`}
      rightAction={<RightAction />}
    >
      <div>
        {listings ? (
          <>
          {/* @ts-ignore */}
          <DataTable data={listings} columns={columnListings} />
          </>
        ) : (
          <Loading />
        )}
      </div>
    </PortalBase>
  )
}

export default BaseListings
