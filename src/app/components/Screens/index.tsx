import React from 'react'
import PageContainer from './components/PageContainer'
import PersonalInfo from './components/pages/PersonalInfo'
import FooterNavigation from './components/FooterNavigation'

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
