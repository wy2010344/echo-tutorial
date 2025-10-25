'use client'
import { SignUp } from '@clerk/nextjs'

export const SignUpView: React.FC<{}> = function () {
  return <SignUp routing="hash" />
}
