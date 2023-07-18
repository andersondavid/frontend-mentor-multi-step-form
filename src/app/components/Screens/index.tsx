import React from 'react'
import PageContainer from './components/PageContainer'
import PersonalInfo from './pages/PersonalInfo'
import SelectYourPlan from './pages/SelectYourPlan'
import FooterNavigation from './components/FooterNavigation'
import PickAddOns from './pages/PickAddOns'

export default function index() {
  return (
    <div className="px-4">
      <PageContainer>
        <PersonalInfo />
        <FooterNavigation />
      </PageContainer>
    </div>
  )
}
  