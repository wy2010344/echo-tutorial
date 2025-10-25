'use client'
import { Button } from '@workspace/ui/components/button'
import { Input } from '@workspace/ui/components/input'
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from 'convex/react'
import { api } from '@workspace/backend/convex/_generated/api'
import { OrganizationSwitcher, SignInButton, UserButton } from '@clerk/nextjs'

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)
  return (
    <>
      <Authenticated>
        <UserButton />
        <OrganizationSwitcher hidePersonal />
        <div className="flex items-center justify-center min-h-svh">
          {JSON.stringify(users, null, 2)}
          <Button
            onClick={() => {
              addUser()
            }}
          >
            Add
          </Button>
        </div>
      </Authenticated>
      <Unauthenticated>
        <p>Must be sign in!</p>
        <SignInButton>Sign in!</SignInButton>
      </Unauthenticated>
    </>
  )
}
