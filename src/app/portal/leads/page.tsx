'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { getAllLeads } from '@/utils/firestore'
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

const Leads = () => {
  const [leads, setLeads] = useState<LeadsType[]>([])
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState('')

  const { toast } = useToast()

  useEffect(() => {
    fetchLeads()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  const fetchLeads = async () => {
    console.log('refetching')
    setLoading(true)
    try {
      // fetch leads
      const fetchLead = await getAllLeads(status)
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

  const filterStatus = useCallback(
    (statusSelected: string) => {
      if (status === statusSelected) {
        setStatus('')
      } else {
        setStatus(statusSelected)
      }
    },
    [status]
  )

  const RightAction = () => (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {status || 'New / Interested / Closed'}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuCheckboxItem
            checked={status === 'New'}
            onCheckedChange={() => filterStatus('New')}
          >
            New
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={status === 'Interested'}
            onCheckedChange={() => filterStatus('Interested')}
          >
            Interested
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={status === 'Closed'}
            onCheckedChange={() => filterStatus('Closed')}
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
