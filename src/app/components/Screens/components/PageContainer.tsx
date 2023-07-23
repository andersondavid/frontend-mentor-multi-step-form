import React from 'react'

type PropsTypes = {
  children: React.ReactNode
}

export default function PageContainer({ children }: PropsTypes) {
  return (
    <div className="m-auto max-w-4xl items-stretch rounded-2xl bg-white px-6 py-9 shadow-xl shadow-light-gray md:flex md:p-4">
      {children}
    </div>
  )
}
