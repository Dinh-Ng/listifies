'use client'

import type React from 'react'
import { useEffect, useState } from 'react'
import { Upload } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export interface Step2Data {
  homeType?: string
  price?: string
  bed?: string
  bath?: string
  square?: string
  refLink?: string
  description?: string
  heroImage?: File | null
}

interface Step2Props {
  isSale: boolean
  // eslint-disable-next-line no-unused-vars
  onDataChange: (data: Step2Data) => void
}

export default function Step2({ isSale, onDataChange }: Step2Props) {
  const [formData, setFormData] = useState<Step2Data>({
    homeType: 'Single Family Home',
    price: '',
    bed: '',
    bath: '',
    square: '',
    refLink: 'propertylink.com',
    description: '',
    heroImage: null,
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, heroImage: file }))
  }

  useEffect(() => {
    onDataChange(formData)
  }, [formData, onDataChange])

  return (
    <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-4 shadow">
      <h2 className="mb-6 text-2xl font-bold">Home Details</h2>
      <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="homeType">Home Type</Label>
          <Input
            id="homeType"
            value={formData.homeType}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">{isSale ? 'Price' : 'Rent'}</Label>
          <Input
            id="price"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bed">Bed</Label>
          <Select onValueChange={(value) => handleSelectChange('bed', value)}>
            <SelectTrigger id="bed">
              <SelectValue placeholder="Select number of bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5+">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="bath">Bath</Label>
          <Select onValueChange={(value) => handleSelectChange('bath', value)}>
            <SelectTrigger id="bath">
              <SelectValue placeholder="Select number of bathrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="1.5">1.5</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="2.5">2.5</SelectItem>
              <SelectItem value="3+">3+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="square">Square</Label>
          <Input
            id="square"
            placeholder="Enter square footage"
            value={formData.square}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="refLink">Ref Link</Label>
          <Input
            id="refLink"
            value={formData.refLink}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Enter property description"
            className="min-h-[100px]"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="heroImage">Hero Image</Label>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => document.getElementById('heroImage')?.click()}
            >
              <Upload className="mr-2 size-4" />
              Upload
            </Button>
            <Input
              id="heroImage"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            {formData.heroImage && <span>{formData.heroImage.name}</span>}
          </div>
        </div>
      </form>
    </div>
  )
}
