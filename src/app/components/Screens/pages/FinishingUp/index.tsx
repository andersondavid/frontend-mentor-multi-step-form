import React from 'react'
import FooterNavigation, { Pages } from '../../components/FooterNavigation'

export default function FinishingUp() {
  return (
    <article>
      <h2 className="page-title">Finishing</h2>
      <p className="page-desc text-cool-gray">
        Double-check everythings look OK before confirming.
      </p>
      <div className="rounded-xl bg-alabaster">
        <div className="flex items-center justify-between p-4">
          <div>
            <p className="font-ubuntu font-bold text-marine-blue">
              Arcade (Monthly)
            </p>
            <p className="font-ubuntu text-cool-gray underline">Change</p>
          </div>
          <div>
            <p className="font-ubuntu font-medium text-marine-blue">$90/yr</p>
          </div>
        </div>
        <hr className="mx-4 border-light-gray" />
        <div className="p-4 pt-1">
          <div className="mt-2 flex justify-between">
            <p className="font-ubuntu text-cool-gray">Online services</p>
            <p className="font-ubuntu text-marine-blue">+1/mo</p>
          </div>
          <div className="mt-2 flex justify-between">
            <p className="font-ubuntu text-cool-gray">Larger storage</p>
            <p className="font-ubuntu text-marine-blue">+1/mo</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        <p className="font-ubuntu text-cool-gray">Total (per year)</p>
        <p className="font-ubuntu text-lg font-medium text-purplish-blue">
          $120/yr
        </p>
      </div>
      <FooterNavigation previous={Pages.PICK_ADDONS} confirm={() => {}} />
    </article>
  )
}
