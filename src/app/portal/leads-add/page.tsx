'use client'

import { useForm } from 'react-hook-form'

import PortalBase from '@/app/portal/base'

import '@/app/portal/leads-add/styles.css'

import { useState } from 'react'
import { addLead } from '@/utils/firestore'

import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
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

type LeadInput = {
  firstName: string
  lastName: string
  phone: string
  email: string
  status?: string
}

const LeadAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadInput>()

  const { toast } = useToast()

  const onSubmit = async (data: LeadInput) => {
    const newData = { ...data, status }
    try {
      await addLead(newData)
      toast({
        title: 'Success',
        description: 'Lead added successfully!',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add lead. Please try again.',
        variant: 'destructive',
      })
    }
  }

  const [status, setStatus] = useState('')

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
      <div className="mx-auto max-w-2xl">
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
          <input
            {...register('phone', { required: true, pattern: /^[2-9]\d{9}$/ })}
          />
          {errors.phone?.type === 'required' && <p>This field is required</p>}
          {errors.phone?.type === 'pattern' && (
            <p>
              Please enter a valid US phone number (10 digits, starting with
              2-9)
            </p>
          )}

          <label>Email</label>
          <input {...register('email', { required: true })} />
          {errors.phone?.type === 'required' && <p>This field is required</p>}

          <label>Status</label>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="select-status" variant="outline">
                {status || 'Select Status'}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuRadioGroup value={status} onValueChange={setStatus}>
                <DropdownMenuRadioItem value="News">News</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Interested">
                  Interested
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Closed">
                  Closed
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <SaveButton />
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
