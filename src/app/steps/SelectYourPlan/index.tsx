'use client'

import React, { useContext, useEffect, useState } from 'react'
import PlanSelectOption from './components/PlanSelectOption'
import PlanDurationSwitch from './components/PlanDurationSwitch'
import FooterNavigation, { Pages } from '../../components/FooterNavigation'
import { Context, SubscriptionEnums, PlanEnums } from '@/store/context'

type PlanItem = {
  iconUrl: string
  title: string
  price: string
  extra?: string
  planEnum: PlanEnums
}

const monthlyPlan: PlanItem[] = [
  {
    iconUrl: '/assets/images/icon-arcade.svg',
    title: 'Arcade',
    price: '$9/mo',
    planEnum: PlanEnums.ARCADE
  },
  {
    iconUrl: '/assets/images/icon-advanced.svg',
    title: 'Advance',
    price: '$12/mo',
    planEnum: PlanEnums.ADVANCE
  },
  {
    iconUrl: '/assets/images/icon-pro.svg',
    title: 'Pro',
    price: '$15/mo',
    planEnum: PlanEnums.PRO
  },
]
const yearlyPlan: PlanItem[] = [
  {
    iconUrl: '/assets/images/icon-arcade.svg',
    title: 'Arcade',
    price: '$90/yr"',
    extra: '2 months free',
    planEnum: PlanEnums.ARCADE
  },
  {
    iconUrl: '/assets/images/icon-advanced.svg',
    title: 'Advance',
    price: '$120/yr',
    extra: '2 months free',
    planEnum: PlanEnums.ADVANCE
  },
  {
    iconUrl: '/assets/images/icon-pro.svg',
    title: 'Pro',
    price: '$150/yr',
    extra: '2 months free',
    planEnum: PlanEnums.PRO
  },
]

export default function SelectYourPlan() {
  const { state, dispatch } = useContext(Context)
  const [plansItemsList, setPlansItemsList] = useState<PlanItem[]>(monthlyPlan)
  const [planItemSelected, setPlanItemSelected] = useState<PlanEnums>(state.plan)
  const [durationCurrent, setDurationCurrent] = useState<SubscriptionEnums>(
    state.subscription
  )

  useEffect(() => {
    if (durationCurrent == SubscriptionEnums.MONTHLY) {
      setPlansItemsList(monthlyPlan)
    } else if (durationCurrent == SubscriptionEnums.YEARLY) {
      setPlansItemsList(yearlyPlan)
    }
  })

  const handleCheckbox = (item: PlanItem) => {
    setPlanItemSelected(item.planEnum)
    dispatch({
      type: 'PLAN',
      payload: item.planEnum
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
        durationCurrent={durationCurrent}
        setDurationCurrent={setDurationCurrent}
      />
      <FooterNavigation
        next={Pages.PICK_ADDONS}
        previous={Pages.PERSONAL_INFO}
      />
    </article>
  )
}
