'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getAllLeads } from '@/utils/firestore'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import { CirclePlus } from 'lucide-react'

import { useToast } from '@/hooks/use-toast'
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

import { columnLead, LeadsType } from './data'

type Checked = DropdownMenuCheckboxItemProps['checked']

const Leads = () => {
  const [showNew, setShowNew] = useState<Checked>(true)
  const [showInterested, setShowInterested] = useState<Checked>(true)
  const [showClosed, setShowClosed] = useState<Checked>(true)

  const [leads, setLeads] = useState<LeadsType[]>([])
  const [loading, setLoading] = useState(true)

  const { toast } = useToast()

  useEffect(() => {
    fetchLeads()
  })

  const fetchLeads = async () => {
    setLoading(true)
    try {
      // fetch leads
      const fetchLead = await getAllLeads()
      setLeads(fetchLead)
    } catch (error) {
      console.error(error)
      toast({
        title: 'Error',
        description: 'Failed to fetch leads. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

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
        {loading ? (
          <Loading />
        ) : (
          <DataTable data={leads} columns={columnLead} />
        )}
      </div>
    </PortalBase>
  )
}

export default Leads
