'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

// import { Button } from '@/components/ui/button'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'

const Button = dynamic(() => import('@/components/ui/button'), { ssr: false })

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  if (typeof window === 'undefined') {
    return <div />
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8">
        {isLogin ? <Login /> : <Register />}
        <div className="text-center">
          <Button
            variant="link"
            onClick={() => setIsLogin(!isLogin)}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            {isLogin
              ? 'Need an account? Register'
              : 'Already have an account? Login'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
