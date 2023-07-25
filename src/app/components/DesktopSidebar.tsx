import React from 'react'
import NumberSelector from './NumberSelector'

export default function DesktopSidebar() {
  return (
    <div className="mr-4 hidden h-[568px] w-[275px] md:block">
      <div className="h-full w-full rounded-xl bg-purplish-blue bg-sidebar-desktop px-2 py-3">
        <div className="m-6 flex items-center">
          <NumberSelector number="1" key="1" />
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
          <NumberSelector number="1" key="1" />
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
          <NumberSelector number="1" key="1" />
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
          <NumberSelector number="1" key="1" />
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
