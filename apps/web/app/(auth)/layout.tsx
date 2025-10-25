import React from 'react'

const Component: React.FC<{
  children?: React.ReactNode
}> = function ({ children }) {
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center">
      {children}
    </div>
  )
}

export default Component
