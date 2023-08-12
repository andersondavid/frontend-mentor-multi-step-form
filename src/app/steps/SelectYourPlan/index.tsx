'use client'

import React, { useContext, useEffect, useState } from 'react'
import PlanSelectOption from './components/PlanSelectOption'
import PlanDurationSwitch from './components/PlanDurationSwitch'
import FooterNavigation from '../../components/FooterNavigation'
import { Context, SubscriptionEnums, PlanEnums, PlanItem, Pages } from '@/store/context'
import { plansData } from '@/store/offersData'

export default function SelectYourPlan() {
  const { state, dispatch } = useContext(Context)
  const [plansItemsList, setPlansItemsList] = useState<PlanItem[]>(plansData.monthlyPlan)
  const [planItemSelected, setPlanItemSelected] = useState<PlanEnums>(
    state.plan
  )
  const [subscriptionKind, setSubscriptionKind] = useState<SubscriptionEnums>(
    state.subscription
  )

  useEffect(() => {
    if (subscriptionKind == SubscriptionEnums.MONTHLY) {
      setPlansItemsList(plansData.monthlyPlan)
    } else if (subscriptionKind == SubscriptionEnums.YEARLY) {
      setPlansItemsList(plansData.yearlyPlan)
    }

    dispatch({
      type: 'SUBSCRIPTION',
      payload: subscriptionKind
    })
    
  }, [subscriptionKind])

  const handleCheckbox = (item: PlanItem) => {
    setPlanItemSelected(item.planEnum)
    dispatch({
      type: 'PLAN',
      payload: item.planEnum,
    })
  }

  return (
    <article className="relative h-full w-full md:pt-[45px]">
      <h2 className="page-title">Select yout plan</h2>
      <p className="page-desc text-cool-gray">
        Your have the option of monthly or yearly billing.
      </p>
      <div className="mt-6 md:flex md:flex-row md:gap-4">
        {plansItemsList.map((item) => {
          return (
            <span
              onClick={() => handleCheckbox(item)}
              className="flex-1"
              key={item.title}
            >
              <PlanSelectOption
                iconUrl={item.iconUrl}
                title={item.title}
                price={item.price}
                extra={item.extra}
                active={planItemSelected == item.planEnum}
                key={item.title}
              />
            </span>
          )
        })}
      </div>
      <PlanDurationSwitch
        subscriptionKind={subscriptionKind}
        setSubscriptionKind={setSubscriptionKind}
      />
      <FooterNavigation
        next={Pages.PICK_ADDONS}
        previous={Pages.PERSONAL_INFO}
      />
    </article>
  )
}
