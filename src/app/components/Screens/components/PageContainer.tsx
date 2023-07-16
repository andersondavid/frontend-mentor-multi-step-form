import React from 'react'

type PropsTypes = {
  children: JSX.Element
}

export default function PageContainer({ children }: PropsTypes) {
  return (
    <div className="relative rounded-xl bg-white px-6 py-8">{children}</div>
  )
}
