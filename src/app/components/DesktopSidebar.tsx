import React, { useContext } from 'react'
import NumberSelector from './NumberSelector'
import { Context, Pages } from '@/store/context'

export default function DesktopSidebar() {

  const {state, dispatch } = useContext(Context)

  return (
    <div className="mr-4 hidden h-[568px] w-[275px] md:block">
      <div className="h-full w-full rounded-xl bg-purplish-blue bg-sidebar-desktop bg-cover px-2 py-3">
        <div className="m-6 flex items-center">
          <NumberSelector number="1" active={state.currentPage == Pages.PERSONAL_INFO} />
          <div className="ml-5">
            <h3 className="font-ubuntu text-sm leading-4 text-cool-gray">
              STEP 1
            </h3>
            <h1 className="font-ubuntu font-bold leading-6 text-white">
              YOUR INFO
            </h1>
          </div>
        </div>
        <div className="m-6 flex items-center">
          <NumberSelector number="2" active={state.currentPage == Pages.SELECT_YOUR_PLAN} />
          <div className="ml-5">
            <h3 className="font-ubuntu text-sm leading-4 text-cool-gray">
              STEP 2
            </h3>
            <h1 className="font-ubuntu font-bold leading-6 text-white">
              SELECT PLAN
            </h1>
          </div>
        </div>
        <div className="m-6 flex items-center">
          <NumberSelector number="3" active={state.currentPage == Pages.PICK_ADDONS} />
          <div className="ml-5">
            <h3 className="font-ubuntu text-sm leading-4 text-cool-gray">
              STEP 3
            </h3>
            <h1 className="font-ubuntu font-bold leading-6 text-white">
              ADD-ONS
            </h1>
          </div>
        </div>
        <div className="m-6 flex items-center">
          <NumberSelector number="4" active={state.currentPage == Pages.FINISHING_UP || state.currentPage == Pages.THANK_YOU} />
          <div className="ml-5">
            <h3 className="font-ubuntu text-sm leading-4 text-cool-gray">
              STEP 4
            </h3>
            <h1 className="font-ubuntu font-bold leading-6 text-white">
              SUMMARY
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
