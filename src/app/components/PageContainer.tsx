import React from 'react'

type PropsTypes = {
  children: React.ReactNode
}

export default function PageContainer({ children }: PropsTypes) {
  return (
    <div className="m-auto rounded-lg bg-white px-6 py-10 shadow-xl shadow-light-gray md:flex md:max-w-[940px] md:rounded-2xl md:p-4">
      {children}
    </div>
  )
}
