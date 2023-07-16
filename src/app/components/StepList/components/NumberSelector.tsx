import React from 'react'

type PropsTypes = {
  number: string
  active?: boolean
}

export default function NumberSelector({ number, active }: PropsTypes) {
  return (
    <span
      className={`${
        active ? 'bg-light-blue' : ''
      } flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-solid border-light-blue`}
    >
      <p className={`${active ? 'text-marine-blue' : 'text-white '} `}>
        {number}
      </p>
    </span>
  )
}
