import { AuthGuard } from '@/app/auth/ui/components/auth-guard'
import { cookies } from 'next/headers'
import React from 'react'
import { SidebarProvider } from '@workspace/ui/components/sidebar'
import { DashboardSidebar } from '../components/dashboard-sidebar'
export const DashboardLayout: React.FC<{
  children?: React.ReactNode
}> = async function ({ children }) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar_state')?.value == 'true'
  return (
    <AuthGuard>
      <SidebarProvider defaultOpen={defaultOpen}>
        <DashboardSidebar />
        <main className="flex flex-1 flex-col">{children}</main>
      </SidebarProvider>
    </AuthGuard>
  )
}
