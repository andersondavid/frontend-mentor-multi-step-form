import { PlanItemAddOns } from '@/store/context'
import React from 'react'

export default function   ConfirmAddonListItem({
  listData,
}: {
  listData: (PlanItemAddOns | undefined)[]
}) {
  return listData?.map((addon) => {
    return (
      <div className="mt-2 flex justify-between" key={addon?.addonEnum}>
        <p className="font-ubuntu text-cool-gray">{addon?.title}</p>
        <p className="font-ubuntu text-marine-blue">{addon?.price}</p>
      </div>
    )
  })
}
