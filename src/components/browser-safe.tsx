'use client'

import { useEffect, useState } from 'react'

export function BrowserSafeComponent() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // or a loading state
  }

  // Your browser-specific code here
  return (
    <div>
      {/* Your component content */}
    </div>
  )
}

