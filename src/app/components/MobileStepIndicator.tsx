import React from 'react'
import NumberSelector from './NumberSelector'

export default function MobileStepIndicator() {
  return (
    <div className="w-full py-8 md:hidden">
      <div className="flex h-full w-full flex-row justify-center gap-4">
        <NumberSelector number={'1'} active={true} />
        <NumberSelector number={'2'} />
        <NumberSelector number={'3'} />
        <NumberSelector number={'4'} />
      </div>
    </div>
  )
}
