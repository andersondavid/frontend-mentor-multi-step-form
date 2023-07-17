import React from 'react'
import { BsCheck } from 'react-icons/bs'

type PropsTypes = {
  checked: boolean
}

export default function Checkbox({ checked }: PropsTypes) {
  return (
    <div className="relative">
      <span
        className={`block h-5 w-5 rounded-[4px] border-[1px] border-solid ${
          checked
            ? 'border-purplish-blue bg-purplish-blue'
            : 'border-light-gray'
        }`}
      >
        {checked && <BsCheck className=" -m-[1px] text-xl text-white" />}
      </span>
    </div>
  )
}
