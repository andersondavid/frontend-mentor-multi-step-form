'use client'

import React, {
  Dispatch,
  SetStateAction,
} from 'react'
import Switch from './Switch'
import { SubscriptionEnums } from '@/store/context'

type PropsTypes = {
  subscriptionKind: SubscriptionEnums
  setSubscriptionKind: Dispatch<SetStateAction<SubscriptionEnums>>
}

function PlanDurationSwitch({
  subscriptionKind,
  setSubscriptionKind,
}: PropsTypes) {
  const changeDurationHandler = (value?: SubscriptionEnums) => {
    if (value == SubscriptionEnums.MONTHLY) {
      setSubscriptionKind(SubscriptionEnums.MONTHLY)
    } else if (value == SubscriptionEnums.YEARLY) {
      setSubscriptionKind(SubscriptionEnums.YEARLY)
    } else if (value == undefined && subscriptionKind == SubscriptionEnums.MONTHLY) {
      setSubscriptionKind(SubscriptionEnums.YEARLY)
    } else if (value == undefined && subscriptionKind == SubscriptionEnums.YEARLY) {
      setSubscriptionKind(SubscriptionEnums.MONTHLY)
    }
  }

  return (
    <div className="flex h-12 items-center justify-center rounded-lg bg-alabaster mt-6">
      <button
        onClick={() => changeDurationHandler(SubscriptionEnums.MONTHLY)}
        className={`${
          subscriptionKind == SubscriptionEnums.MONTHLY
            ? 'text-marine-blue'
            : 'text-cool-gray'
        } mx-5 font-medium`}
      >
        Monthy
      </button>
      <button onClick={() => changeDurationHandler()}>
        <Switch duration={subscriptionKind} />
      </button>
      <button
        onClick={() => changeDurationHandler(SubscriptionEnums.YEARLY)}
        className={`${
          subscriptionKind == SubscriptionEnums.YEARLY
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
