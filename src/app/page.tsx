'use client'
import { useState } from 'react'
import FinishingUp from './steps/FinishingUp'
import PersonalInfo from './steps/PersonalInfo'
import PickAddOns from './steps/PickAddOns'
import SelectYourPlan from './steps/SelectYourPlan'
import ThankYou from './steps/ThankYou'

enum Pages {
  PERSONAL_INFO,
  SELECT_YOUR_PLAN,
  PICK_ADDONS,
  FINISHING_UP,
  THANK_YOU,
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(Pages.PERSONAL_INFO)
  const [counter, setCounter] = useState(0)

  const change = () => {
    if (counter == 0) {
      setCurrentPage(Pages.SELECT_YOUR_PLAN)
    } else if (counter == 1) {
      setCurrentPage(Pages.PICK_ADDONS)
    } else if (counter == 2) {
      setCurrentPage(Pages.FINISHING_UP)
    } else if (counter == 3) {
      setCurrentPage(Pages.THANK_YOU)
    }

    setCounter(counter + 1)
  }

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
