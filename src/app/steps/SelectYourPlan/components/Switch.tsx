import { SubscriptionEnums } from '@/store/context'
import React from 'react'

type PropsTypes = {
  duration: SubscriptionEnums
}

export default function Switch({ duration }: PropsTypes) {
  return (
    <div className="relative">
      <span className="block h-5 w-10 rounded-full bg-marine-blue p-1">
        <span className={`${duration == SubscriptionEnums.MONTHLY ? '' : 'ml-5'} block h-3 w-3 rounded-full bg-white transition-all`}></span>
      </span>
    </div>
  )
}
