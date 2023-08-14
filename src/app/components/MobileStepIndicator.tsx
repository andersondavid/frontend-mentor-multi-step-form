import React, { useContext } from 'react'
import NumberSelector from './NumberSelector'
import { Context, Pages } from '@/store/context'

export default function MobileStepIndicator() {
  const { state } = useContext(Context)

  return (
    <div className="w-full py-8 md:hidden">
      <div className="flex h-full w-full flex-row justify-center gap-4">
        <NumberSelector number={'1'} active={state.currentPage == Pages.PERSONAL_INFO} />
        <NumberSelector number={'2'} active={state.currentPage == Pages.SELECT_YOUR_PLAN} />
        <NumberSelector number={'3'} active={state.currentPage == Pages.PICK_ADDONS} />
        <NumberSelector number={'4'} active={state.currentPage == Pages.FINISHING_UP} />
      </div>
    </div>
  )
}
