'use client'

import React, { useState } from 'react'
import PageContainer from './components/PageContainer'
import PersonalInfo from './pages/PersonalInfo'
import SelectYourPlan from './pages/SelectYourPlan'
import PickAddOns from './pages/PickAddOns'
import FinishingUp from './pages/FinishingUp'
import ThankYou from './pages/ThankYou'
import DesktopSidebar from '../DesktopSidebar'
import MobileStepIndicator from '../MobileStepIndicator'

enum Pages {
  PERSONAL_INFO,
  SELECT_YOUR_PLAN,
  PICK_ADDONS,
  FINISHING_UP,
  THANK_YOU,
}

export default function Screens() {
  const [currentPage, setCurrentPage] = useState(Pages.PERSONAL_INFO)

  return (
    <div className="m-auto w-full px-4 md:px-0">
      <MobileStepIndicator />

      <PageContainer>
        <DesktopSidebar />
        <div className="md:mx-auto">
          <div className="h-full w-full md:max-w-md">
            {currentPage == Pages.PERSONAL_INFO && <PersonalInfo />}
            {currentPage == Pages.SELECT_YOUR_PLAN && <SelectYourPlan />}
            {currentPage == Pages.PICK_ADDONS && <PickAddOns />}
            {currentPage == Pages.FINISHING_UP && <FinishingUp />}
            {currentPage == Pages.THANK_YOU && <ThankYou />}
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
