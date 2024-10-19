'use client'

import { useForm } from 'react-hook-form'

import PortalBase from '@/app/portal/base'

import '@/app/portal/leads-add/styles.css'

import { useState } from 'react'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import SaveButton from '@/app/portal/components/save-button'

type Checked = DropdownMenuCheckboxItemProps['checked']

const LeadAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

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
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="max-w-28">
          Add Note
        </Button>
      </SheetTrigger>

      <SheetContent className="bg-[#fbfbff]">
        <SheetHeader>
          <SheetTitle>Add Note</SheetTitle>
        </SheetHeader>

        <div className="mt-10 flex flex-col">
          <Input placeholder="Enter new note here" />

          <NoteItem />
          <NoteItem />

          <Button className="mt-10">Save</Button>
        </div>
      </SheetContent>
    </Sheet>
  )

  return (
    <PortalBase title="Add / Edit Lead" rightAction={<RightAction />}>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input
            {...register('firstName', {
              required: true,
              maxLength: 20,
            })}
          />
          {errors?.firstName?.type === 'required' && (
            <p>This field is required</p>
          )}
          {errors?.firstName?.type === 'maxLength' && (
            <p>First name cannot exceed 20 characters</p>
          )}

          <label>Laste Name</label>
          <input {...register('lastName', { required: true, maxLength: 20 })} />
          {errors?.lastName?.type === 'required' && (
            <p>This field is required</p>
          )}
          {errors?.lastName?.type === 'maxLength' && (
            <p>Last name cannot exceed 20 characters</p>
          )}

          <label>Phone Number</label>
          <input {...register('phone', { required: true })} />
          {errors.phone?.types === 'required' && <p>This field is required</p>}

          <label>Email</label>
          <input {...register('email', { required: true })} />
          {errors.phone?.email === 'required' && <p>This field is required</p>}

          <label>Status</label>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="select-status" variant="outline">
                {filterTitle}
              </Button>
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

          <div className="flex justify-end">
            <SaveButton />
          </div>
        </form>
      </div>
    </PortalBase>
  )
}

const NoteItem = () => (
  <div className="mt-5">
    <p className="font-bold">09/05/2024</p>
    <p>
      It is a long established fact that a reader will be distracted by the
      readable content
    </p>
  </div>
)

export default LeadAdd
