'use client'

import React, { useContext, useEffect, useState } from 'react'
import AddOnsSelectOption from './components/AddOnsSelectOption'
import FooterNavigation from '../../components/FooterNavigation'
import { Context, Pages, PlanItemAddOns, SubscriptionEnums } from '@/store/context'
import { addonsData } from '@/store/offersData'

export default function PickAddOns() {
  const { state, dispatch } = useContext(Context)
  const [typeDurationAddOns, setTypeDurationAddOns] = useState<
    PlanItemAddOns[]
  >(addonsData.monthlyPlansAddOns)

  useEffect(() => {
    if (state.subscription == SubscriptionEnums.YEARLY) {
      setTypeDurationAddOns(addonsData.yearlyPlansAddOns)
    }
  }, [state.subscription])

  const handleCheckboxChange = (name: string) => {
    let addonDataUpdated = typeDurationAddOns.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          checked: !item.checked,
        }
      }
      return item
    })

    let itemsChecked = addonDataUpdated.map((item) => {
      if (item.checked) {
        return item.addonEnum
      }
    })
    setTypeDurationAddOns(addonDataUpdated)
    dispatch({
      type: 'ADDON',
      payload: itemsChecked,
    })
  }

  return (
    <article className="relative h-full w-full md:pt-[45px]">
      <h2 className="page-title">Pick add-ons</h2>
      <p className="page-desc text-cool-gray">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="mt-6">
        {typeDurationAddOns.map((item) => {
          return (
            <span
              onClick={() => handleCheckboxChange(item.name)}
              key={item.title}
            >
              <AddOnsSelectOption
                checked={item.checked}
                desc={item.desc}
                title={item.title}
                price={item.price}
                key={item.title}
              />
            </span>
          )
        })}
      </div>
      <FooterNavigation
        next={Pages.FINISHING_UP}
        previous={Pages.SELECT_YOUR_PLAN}
      />
    </article>
  )
}
