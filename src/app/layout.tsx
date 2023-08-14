'use client'
import { useReducer } from 'react'
import Head from 'next/head'
import type { Metadata } from 'next'
import './globals.css'

import DesktopSidebar from './components/DesktopSidebar'
import MobileStepIndicator from './components/MobileStepIndicator'
import PageContainer from './components/PageContainer'

import {
  Context,
  IContext,
  Pages,
  PlanEnums,
  SubscriptionEnums,
} from '@/store/context'
import { reducer } from '@/store/reducer'

export const metadata: Metadata = {
  title: 'Frontend Mentor - Multi-step form',
  description:
    'This is a solution to the Multi-step form challenge on Frontend Mentor',
}

const initialState: IContext = {
  currentPage: Pages.PERSONAL_INFO,
  addons: [],
  personalInfo: { email: '', name: '', phone: '' },
  plan: PlanEnums.ADVANCE,
  subscription: SubscriptionEnums.MONTHLY,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <html lang="en">
        {/* <Head> */}
          <title>Frontend Mentor - Multi-step form</title>
        {/* </Head> */}
        <body className="h-screen w-screen items-center justify-center bg-magnolia md:flex">
          <div className="fixed -z-10 h-1/4 w-full bg-sidebar-mobile bg-cover md:hidden"></div>
          <div className="w-full px-4">
            <MobileStepIndicator />
            <PageContainer>
              <DesktopSidebar />
              <div className="w-full md:mx-auto md:max-w-[450px]">
                {children}
              </div>
            </PageContainer>
          </div>
        </body>
      </html>
    </Context.Provider>
  )
}
