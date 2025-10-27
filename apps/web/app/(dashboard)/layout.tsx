import React from 'react'
import { AuthGuard } from '../auth/ui/components/auth-guard'
import { DashboardLayout } from '@/module/dashboard/ui/layouts/dashboard-layout'
import { cookies } from 'next/headers'

const Component: React.FC<{
  children?: React.ReactNode
}> = function ({ children }) {
  return <DashboardLayout>{children}</DashboardLayout>
}

export default Component
