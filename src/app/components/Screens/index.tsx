'use client'

import React, { useState } from 'react'
import PageContainer from './components/PageContainer'
import PersonalInfo from './pages/PersonalInfo'
import SelectYourPlan from './pages/SelectYourPlan'
import PickAddOns from './pages/PickAddOns'
import FooterNavigation from './components/FooterNavigation'
import FinishingUp from './pages/FinishingUp'

enum Pages {
  PERSONAL_INFO,
  SELECT_YOUR_PLAN,
  PICK_ADDONS,
  FINISHING_UP,
}

export default function Screens() {
  const [currentPage, setCurrentPage] = useState(Pages.PERSONAL_INFO)

  const changePage = () => {
    if (currentPage == Pages.PERSONAL_INFO) {
      setCurrentPage(Pages.SELECT_YOUR_PLAN)
    } else if (currentPage == Pages.SELECT_YOUR_PLAN) {
      setCurrentPage(Pages.PICK_ADDONS)
    } else if (currentPage == Pages.PICK_ADDONS) {
      setCurrentPage(Pages.FINISHING_UP)
    }
  }

  return (
    <div className="px-4">
      <PageContainer>
        {currentPage == Pages.PERSONAL_INFO && <PersonalInfo />}
        {currentPage == Pages.SELECT_YOUR_PLAN && <SelectYourPlan />}
        {currentPage == Pages.PICK_ADDONS && <PickAddOns />}
        {currentPage == Pages.FINISHING_UP && <FinishingUp />}
        <FooterNavigation changePage={changePage} />
      </PageContainer>
    </div>
  )
}
