'use client'

import React, {
  Dispatch,
  SetStateAction,
} from 'react'
import Switch from './Switch'
import { SubscriptionEnums } from '@/store/context'

type PropsTypes = {
  durationCurrent: SubscriptionEnums
  setDurationCurrent: Dispatch<SetStateAction<SubscriptionEnums>>
}

function PlanDurationSwitch({
  durationCurrent,
  setDurationCurrent,
}: PropsTypes) {
  const changeDurationHandler = (value?: SubscriptionEnums) => {
    if (value == SubscriptionEnums.MONTHLY) {
      setDurationCurrent(SubscriptionEnums.MONTHLY)
    } else if (value == SubscriptionEnums.YEARLY) {
      setDurationCurrent(SubscriptionEnums.YEARLY)
    } else if (value == undefined && durationCurrent == SubscriptionEnums.MONTHLY) {
      setDurationCurrent(SubscriptionEnums.YEARLY)
    } else if (value == undefined && durationCurrent == SubscriptionEnums.YEARLY) {
      setDurationCurrent(SubscriptionEnums.MONTHLY)
    }
  }

  return (
    <div className="flex h-12 items-center justify-center rounded-lg bg-alabaster mt-6">
      <button
        onClick={() => changeDurationHandler(SubscriptionEnums.MONTHLY)}
        className={`${
          durationCurrent == SubscriptionEnums.MONTHLY
            ? 'text-marine-blue'
            : 'text-cool-gray'
        } mx-5 font-medium`}
      >
        Monthy
      </button>
      <button onClick={() => changeDurationHandler()}>
        <Switch duration={durationCurrent} />
      </button>
      <button
        onClick={() => changeDurationHandler(SubscriptionEnums.YEARLY)}
        className={`${
          durationCurrent == SubscriptionEnums.YEARLY
            ? 'text-marine-blue'
            : 'text-cool-gray'
        } mx-5 font-medium`}
      >
        Yearly
      </button>
    </div>
  )
}

export default PlanDurationSwitch
