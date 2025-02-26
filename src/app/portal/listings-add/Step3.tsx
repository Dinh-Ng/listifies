'use client'

import type React from 'react'
import { useEffect, useState } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export interface Step3Data {
  date?: string
  time?: string
  name?: string
  phone?: string
}

interface Step3Props {
  isSale: boolean
  // eslint-disable-next-line no-unused-vars
  onDataChange: (data: Step3Data) => void
  data: Step3Data
}

export default function Step3({ isSale, onDataChange, data }: Step3Props) {
  const [formData, setFormData] = useState<Step3Data>(data)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  useEffect(() => {
    onDataChange(formData)
  }, [formData, onDataChange])

  return (
    <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-4 shadow">
      <h2 className="mb-6 text-2xl font-bold">Open House Info</h2>
      <form className="space-y-6">
        {isSale ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                placeholder="Select date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                placeholder="Select time"
                value={formData.time}
                onChange={handleInputChange}
              />
            </div>
          </div>
        ) : null}

        <div>
          <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
