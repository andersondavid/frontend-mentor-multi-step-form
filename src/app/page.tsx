'use client'
import { useContext, useState } from 'react'
import FinishingUp from './steps/FinishingUp'
import PersonalInfo from './steps/PersonalInfo'
import PickAddOns from './steps/PickAddOns'
import SelectYourPlan from './steps/SelectYourPlan'
import ThankYou from './steps/ThankYou'
import { Context } from '@/store/context'

enum Pages {
  PERSONAL_INFO,
  SELECT_YOUR_PLAN,
  PICK_ADDONS,
  FINISHING_UP,
  THANK_YOU,
}

export default function Home() {
  const {
    state: { currentPage },
  } = useContext(Context)

  return (
    <main className="h-full md:flex">
      {currentPage == Pages.PERSONAL_INFO && <PersonalInfo />}
      {currentPage == Pages.SELECT_YOUR_PLAN && <SelectYourPlan />}
      {currentPage == Pages.PICK_ADDONS && <PickAddOns />}
      {currentPage == Pages.FINISHING_UP && <FinishingUp />}
      {currentPage == Pages.THANK_YOU && <ThankYou />}
    </main>
  )
}
