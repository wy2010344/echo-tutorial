import React from 'react'
import { AuthGuard } from '../auth/ui/components/auth-guard'

const Component: React.FC<{
  children?: React.ReactNode
}> = function ({ children }) {
  return <AuthGuard>{children}</AuthGuard>
}

export default Component
