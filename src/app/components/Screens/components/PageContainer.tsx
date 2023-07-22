import React from 'react'

type PropsTypes = {
  children: React.ReactNode
}

export default function PageContainer({ children }: PropsTypes) {
  return (
    <div className="m-auto px-6 py-9 md:flex max-w-4xl items-stretch rounded-xl bg-white md:p-4">
      {children}
    </div>
  )
}
