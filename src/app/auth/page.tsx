'use client'

import { useState } from 'react'

import { IsClientCtxProvider, useIsClient } from '@/hooks/is-client-ctx'
import { Button } from '@/components/ui/button'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const isClient = useIsClient()

  return (
    <IsClientCtxProvider>
      {isClient && (
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
      )}
    </IsClientCtxProvider>
  )
}

export default AuthPage
