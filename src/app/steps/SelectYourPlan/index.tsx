'use client'

import React, { useEffect, useRef, useState } from 'react'
import PlanSelectOption from './components/PlanSelectOption'
import PlanDurationSwitch from './components/PlanDurationSwitch'
import FooterNavigation, { Pages } from '../../components/FooterNavigation'

type PlanItem = {
  iconUrl: string
  title: string
  price: string
  extra?: string
}

enum Duration {
  Monthy = 'MONTHY',
  Yearly = 'YEARLY',
}

const monthlyPlan: PlanItem[] = [
  {
    iconUrl: '/assets/images/icon-arcade.svg',
    title: 'Arcade',
    price: '$9/mo',
  },
  {
    iconUrl: '/assets/images/icon-advanced.svg',
    title: 'Advance',
    price: '$12/mo',
  },
  {
    iconUrl: '/assets/images/icon-pro.svg',
    title: 'Pro',
    price: '$15/mo',
  },
]
const yearlyPlan: PlanItem[] = [
  {
    iconUrl: '/assets/images/icon-arcade.svg',
    title: 'Arcade',
    price: '$90/yr"',
    extra: '2 months free',
  },
  {
    iconUrl: '/assets/images/icon-advanced.svg',
    title: 'Advance',
    price: '$120/yr',
    extra: '2 months free',
  },
  {
    iconUrl: '/assets/images/icon-pro.svg',
    title: 'Pro',
    price: '$150/yr',
    extra: '2 months free',
  },
]

export default function SelectYourPlan() {
  const [typeDuration, setTypeDuration] = useState<PlanItem[]>(monthlyPlan)
  const [planSelected, setPlanSelected] = useState<number>(0)
  const [durationCurrent, setDurationCurrent] = useState<Duration>(
    Duration.Monthy
  )

  useEffect(() => {
    if (durationCurrent == Duration.Monthy) {
      setTypeDuration(monthlyPlan)
    } else if (durationCurrent == Duration.Yearly) {
      setTypeDuration(yearlyPlan)
    }
  })

  return (
    <article className="relative h-full w-full md:pt-[60px]">
      <h2 className="page-title">Select yout plan</h2>
      <p className="page-desc">
        Your have the option of monthly or yearly billing.
      </p>
      <div className="mt-6">
        {typeDuration.map((item, index) => {
          return (
            <span onClick={() => setPlanSelected(index)}>
              <PlanSelectOption
                iconUrl={item.iconUrl}
                title={item.title}
                price={item.price}
                extra={item.extra}
                active={planSelected == index}
                key={item.title}
              />
            </span>
          )
        })}
        <PlanDurationSwitch
          durationCurrent={durationCurrent}
          setDurationCurrent={setDurationCurrent}
        />
      </div>
      <FooterNavigation
        next={Pages.PICK_ADDONS}
        previous={Pages.PERSONAL_INFO}
      />
    </article>
  )
}
