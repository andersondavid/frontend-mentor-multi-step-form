import React from 'react'

type PropsTypes = {
  iconUrl: string
  title: string
  price: string
  extra?: string
  active: boolean
}

export default function PlanSelectOption({
  iconUrl,
  title,
  price,
  extra,
  active,
}: PropsTypes) {
  return (
    <div
      className={`${
        active ? 'border-purplish-blue bg-alabaster ' : 'border-light-gray'
      } my-3 flex rounded-md border-[1px] p-[14px] md:flex-col`}
    >
      <div className="">
        <img src={iconUrl} />
      </div>
      <div className="px-3 md:px-0 md:pt-10">
        <h3 className="font-ubuntu text-base font-medium antialiased">
          {title}
        </h3>
        <p className="font-ubuntu text-sm text-cool-gray">{price}</p>
        {extra && (
          <p className="mt-1 font-ubuntu text-xs text-marine-blue">{extra}</p>
        )}
      </div>
    </div>
  )
}
