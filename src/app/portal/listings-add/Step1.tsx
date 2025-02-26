'use client'

import type React from 'react'
import { useEffect, useState } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export interface Step1Data {
  address?: string
  unit?: string
  city?: string
  state?: string
  zip?: string
  image?: File | null
}

interface Step1Props {
  // eslint-disable-next-line no-unused-vars
  onDataChange: (data: Step1Data) => void
  data: Step1Data
}

export default function Step1({ onDataChange, data }: Step1Props) {
  const [formData, setFormData] = useState<Step1Data>(data)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, files } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: id === 'image' ? (files ? files[0] : null) : value,
    }))
  }

  useEffect(() => {
    onDataChange(formData)
  }, [formData, onDataChange])

  return (
    <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-4 shadow">
      <h2 className="mb-6 text-2xl font-bold">Home Address</h2>
      <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="unit">Unit</Label>
          <Input
            id="unit"
            placeholder="Enter unit"
            value={formData.unit}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Input
            id="state"
            placeholder="Enter state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="zip">Zip</Label>
          <Input
            id="zip"
            placeholder="Enter zip code"
            value={formData.zip}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Image</Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  )
}
