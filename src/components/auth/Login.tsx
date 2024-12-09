'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { FcGoogle } from 'react-icons/fc'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { auth, googleProvider } from '@/app/firebase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { user } = useAuth()

  // If user is already logged in, redirect to main page
  if (user) {
    router.push('/')
    return null
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setError(null)
      router.push('/') // Redirect to the main page
    } catch (error) {
      setError('Failed to log in. Please check your email and password.')
      console.error('Error logging in:', error)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      setError(null)
      router.push('/') // Redirect to the main page
    } catch (error) {
      setError('Failed to log in with Google. Please try again.')
      console.error('Error logging in with Google:', error)
    }
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your email and password to log in.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <div className="mt-4">
          <Separator />
          <p className="my-4 text-center text-sm text-gray-600">
            Or continue with
          </p>
          <Button
            variant="outline"
            className="flex w-full items-center justify-center"
            onClick={handleGoogleLogin}
          >
            <FcGoogle className="mr-2 size-4" />
            Login with Google
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        {/* <p className="text-sm text-gray-600">
          {"Don't have an account? Register here."}
        </p> */}
      </CardFooter>
    </Card>
  )
}
