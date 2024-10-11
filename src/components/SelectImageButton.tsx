'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { ImagePlus } from 'lucide-react'

interface ImageSelectorProps {
  width?: number
  height?: number
}

export default function SelectImageButton({ width = 256, height = 256 }: ImageSelectorProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageSelect = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Calculate sizes based on the component's dimensions
  const iconSize = Math.min(width, height) / 6
  const fontSize = Math.max(12, Math.min(width, height) / 16)

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={handleImageSelect}
        style={{ width: `${width}px`, height: `${height}px` }}
        className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 transition-colors duration-300 hover:bg-gray-100"
      >
        <div className="flex flex-col items-center justify-center p-4 text-center">
          {selectedImage ? (
            <Image
              src={selectedImage}
              alt="Selected thumbnail"
              width={width - 32}
              height={height - 32}
              objectFit="cover"
              className="rounded-lg"
            />
          ) : (
            <>
              <ImagePlus style={{ width: `${iconSize}px`, height: `${iconSize}px` }} className="mb-3 text-gray-400" />
              <p className="mb-2 font-semibold" style={{ fontSize: `${fontSize}px` }}>
                Click to upload
              </p>
              <p className="text-gray-500" style={{ fontSize: `${Math.max(10, fontSize * 0.8)}px` }}>
                SVG, PNG, JPG or GIF
              </p>
            </>
          )}
        </div>
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>
    </div>
  )
}
