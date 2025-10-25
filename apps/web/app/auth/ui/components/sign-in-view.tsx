'use client'
import { SignIn } from '@clerk/nextjs'

export const SignInView: React.FC<{}> = function () {
  return <SignIn routing="hash" />
}
