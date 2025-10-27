'use client'

import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@workspace/ui/components/sidebar'
import {
  CreditCardIcon,
  InboxIcon,
  LayoutDashboardIcon,
  LibraryBigIcon,
  Mic,
  PaletteIcon,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const customerSupportItems = [
  {
    title: 'conversations',
    url: '/conversations',
    icon: InboxIcon,
  },
  {
    title: 'knowledge Base',
    url: '/files',
    icon: LibraryBigIcon,
  },
]

const configurationItems = [
  {
    title: 'Widget Customization',
    url: '/customization',
    icon: PaletteIcon,
  },
  {
    title: 'Integrations',
    url: '/integrations',
    icon: LayoutDashboardIcon,
  },
  {
    title: 'Voice Assistant',
    url: '/plugins/vapi',
    icon: Mic,
  },
]

const accountItems = [
  {
    title: 'Plans & Billing',
    url: '/billing',
    icon: CreditCardIcon,
  },
]

export const DashboardSidebar = () => {
  const pathname = usePathname()

  function isActive(url: string) {
    if (url == '/') {
      return pathname == url
    }
    return pathname.startsWith(url)
  }
  return (
    <Sidebar className="group" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg">
              <OrganizationSwitcher
                skipInvitationScreen
                appearance={{
                  elements: {
                    rootBox: 'w-full! h-8!',
                    avatarBox: 'size-4! rounded-sm!',
                    organizationSwitcherTrigger:
                      'w-full! justify-start! group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!',
                    organizationPreview:
                      'group-data-[collapsible=icon]:justify-center! gap-2',
                    organizationPreviewTextContainer:
                      'group-data-[collapsible=icon]:hidden! text-xs! font-medium! text-sidebar-foreground!',
                    organizationSwitcherTriggerIcon:
                      'group-data-[collapsible=icon]:hidden! ml-auto! text-sidebar-foreground',
                  },
                }}
              />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Customer Support</SidebarGroupLabel>
          <SidebarContent>
            <SidebarMenu>
              {customerSupportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    tooltip={item.title}
                  >
                    <Link href={item.url}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Configuration</SidebarGroupLabel>
          <SidebarContent>
            <SidebarMenu>
              {configurationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    tooltip={item.title}
                  >
                    <Link href={item.url}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarContent>
            <SidebarMenu>
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    tooltip={item.title}
                  >
                    <Link href={item.url}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <UserButton
              showName
              appearance={{
                elements: {
                  rootBox: 'w-full! h-8!',
                  userButtonTrigger:
                    'w-full! p-2! hover:bg-sidebar-accent! hover:text-sidebar-accent-foreground! group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! ',

                  userButtonBox:
                    'w-full! flex-row-reverse! justify-end! gap-2! group-data-[collapsible=icon]:justify-center! text-sidebar-foreground!',
                  userButtonOuterIdentifier:
                    'pl-0! group-data-[collapsible=icon]:hidden!',
                  avatarBox: 'size-4!',
                },
              }}
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
