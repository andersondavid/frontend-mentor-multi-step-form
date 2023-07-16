'use client'

import React, { useState } from 'react'
import Switch from './Switch'

enum Duration {
  Monthy = 'MONTHY',
  Yearly = 'YEARLY'
}

export default function PlanDurationSwitch() {
  const [duration, setDuration] = useState(true)

  const changeDurationHandler = (value: boolean) => {
    setDuration(value)
  }

  return (
    <div className="bg-alabaster flex h-12 items-center justify-center rounded-lg">
      <button
        onClick={() => changeDurationHandler(true)}
        className={`${duration ? 'text-marine-blue' : 'text-cool-gray'} mx-5 font-medium`}
      >
        Monthy
      </button>
      <button onClick={() => changeDurationHandler(!duration)}>
        <Switch active={duration} />
      </button>
      <button
        onClick={() => changeDurationHandler(false)}
        className={`${!duration ? 'text-marine-blue' : 'text-cool-gray'} mx-5 font-medium`}
      >
        Yearly
      </button>
    </div>
  )
}
