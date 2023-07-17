import React from 'react'
import Checkbox from './Checkbox'

type PropsTypes = {
  checked: boolean
  title: string
  desc: string
  price: string
}

export default function PlanSelectOption({
  title,
  price,
  checked,
  desc,
}: PropsTypes) {
  return (
    <div
      className={`${
        checked ? 'border-marine-blue bg-alabaster ' : 'border-light-gray'
      } my-3 flex flex-row items-center rounded-md border-[1px] px-4 py-2`}
    >
      <div className="h-5 w-5">
        <Checkbox checked={checked} />
      </div>
      <div className="mx-4 grow">
        <h3 className="font-ubuntu text-base font-medium antialiased">
          {title}
        </h3>
        <p className="font-ubuntu text-xs font-medium text-cool-gray">{desc}</p>
      </div>
      <div>
        <p className="text-xs font-medium text-purplish-blue">{price}</p>
      </div>
    </div>
  )
}
