'use client'
import { Authenticated, AuthLoading, Unauthenticated } from 'convex/react'
import { AuthLayout } from './auth-layout'
import { SignInView } from './sign-in-view'

export const AuthGuard: React.FC<{
  children?: React.ReactNode
}> = function ({ children }) {
  return (
    <>
      <AuthLoading>
        <AuthLayout>
          <p>Loading...</p>
        </AuthLayout>
      </AuthLoading>
      <Authenticated>
        <AuthLayout>{children}</AuthLayout>
      </Authenticated>
      <Unauthenticated>
        <AuthLayout>
          <SignInView />
        </AuthLayout>
      </Unauthenticated>
    </>
  )
}
