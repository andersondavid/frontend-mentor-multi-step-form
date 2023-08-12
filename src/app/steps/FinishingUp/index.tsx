import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import FooterNavigation from '@/app/components/FooterNavigation'
import { Context, Pages } from '@/store/context'
import { dataFormat } from '@/utils/dataFormat'
import ConfirmAddonListItem from './components/ConfirmAddonListItem'
import { calculatePrice } from '@/utils/calculatePrice'

export default function FinishingUp() {
  const { state } = useContext(Context)

  const budget = calculatePrice(state)
  const dataFormated = dataFormat(state, budget)

  return (
    <article className="relative h-full w-full md:pt-[45px]">
      <h2 className="page-title">Finishing up</h2>
      <p className="page-desc text-cool-gray">
        Double-check everythings look OK before confirming.
      </p>
      <div className="mt-6 rounded-xl bg-alabaster">
        <div className="flex items-center justify-between p-4">
          <div>
            <p className="font-ubuntu font-bold text-marine-blue">
              {dataFormated?.planText} ({dataFormated?.subscriptionText})
            </p>
            <p className="font-ubuntu text-cool-gray underline">Change</p>
          </div>
          <div>
            <p className="font-ubuntu font-medium text-marine-blue">$90/yr</p>
          </div>
        </div>
        <hr className="mx-4 border-light-gray" />
        <div className="p-4 pt-1">
          {dataFormated.addons.length > 0 && (
            <ConfirmAddonListItem listData={dataFormated.addons} />
          )}
        </div>
      </div>
      <div className="flex items-center justify-between px-4 pt-4">
        <p className="font-ubuntu text-cool-gray">Total (per year)</p>
        <p className="font-ubuntu text-lg font-medium text-purplish-blue">
          {dataFormated.totalBudget}
        </p>
      </div>
      <FooterNavigation previous={Pages.PICK_ADDONS} confirm={() => {}} />
    </article>
  )
}
