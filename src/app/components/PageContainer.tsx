import React from 'react'

type PropsTypes = {
  children: React.ReactNode
}

export default function PageContainer({ children }: PropsTypes) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-xl shadow-light-gray md:flex m-auto md:max-w-[940px]">
      {children}
    </div>
  )
}
