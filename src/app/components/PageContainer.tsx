import React from 'react'

type PropsTypes = {
  children: React.ReactNode
}

export default function PageContainer({ children }: PropsTypes) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl shadow-light-gray">
      {children}
    </div>
  )
}
