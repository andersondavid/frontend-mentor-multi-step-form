'use client'

import React, { useContext, useState } from 'react'
import AddOnsSelectOption from './components/AddOnsSelectOption'
import FooterNavigation, { Pages } from '../../components/FooterNavigation'
import { Context } from '@/store/context'

type PlanItemAddOns = {
  name: string
  checked: boolean
  title: string
  desc: string
  price: string
}

const monthlyPlansAddOns: PlanItemAddOns[] = [
  {
    name: 'onlineServices',
    title: 'Online service',
    price: '+$1/mo',
    checked: false,
    desc: 'Access to multiplayer games',
  },
  {
    name: 'largerStorage',
    title: 'Larger storate',
    price: '+$2/mo',
    checked: false,
    desc: 'Extra 1TB of cloud save',
  },
  {
    name: 'customProfile',
    title: 'Customizable profile',
    price: '+$2/mo',
    checked: false,
    desc: 'Custom theme on your profile',
  },
]
const yearlyPlansAddOns: PlanItemAddOns[] = [
  {
    name: 'onlineServices',
    title: 'Online service',
    price: '+$10/yr',
    checked: false,
    desc: 'Access to multiplayer games',
  },
  {
    name: 'largerStorage',
    title: 'Larger storate',
    price: '+$20/ye',
    checked: false,
    desc: 'Extra 1TB of cloud save',
  },
  {
    name: 'customProfile',
    title: 'Customizable profile',
    price: '+$20/yr',
    checked: false,
    desc: 'Custom theme on your profile',
  },
]

export default function PickAddOns() {
  const { state, dispatch } = useContext(Context)
  const [typeDurationAddOns, setTypeDurationAddOns] =
    useState<PlanItemAddOns[]>(yearlyPlansAddOns)

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
        return item
      }
    })
    setTypeDurationAddOns(addonDataUpdated)
    dispatch({
      type: 'ADDON',
      payload: itemsChecked
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
