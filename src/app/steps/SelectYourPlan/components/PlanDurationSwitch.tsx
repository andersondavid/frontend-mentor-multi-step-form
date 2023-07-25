'use client'

import React, {
  Dispatch,
  SetStateAction,
  forwardRef,
} from 'react'
import Switch from './Switch'

type PropsTypes = {
  durationCurrent: Duration
  setDurationCurrent: Dispatch<SetStateAction<Duration>>
}

enum Duration {
  Monthy = 'MONTHY',
  Yearly = 'YEARLY',
}

function PlanDurationSwitch({
  durationCurrent,
  setDurationCurrent,
}: PropsTypes) {
  const changeDurationHandler = (value?: Duration) => {
    if (value == Duration.Monthy) {
      setDurationCurrent(Duration.Monthy)
    } else if (value == Duration.Yearly) {
      setDurationCurrent(Duration.Yearly)
    } else if (value == undefined && durationCurrent == Duration.Monthy) {
      setDurationCurrent(Duration.Yearly)
    } else if (value == undefined && durationCurrent == Duration.Yearly) {
      setDurationCurrent(Duration.Monthy)
    }
  }

  return (
    <div className="flex h-12 items-center justify-center rounded-lg bg-alabaster mt-6">
      <button
        onClick={() => changeDurationHandler(Duration.Monthy)}
        className={`${
          durationCurrent == Duration.Monthy
            ? 'text-marine-blue'
            : 'text-cool-gray'
        } mx-5 font-medium`}
      >
        Monthy
      </button>
      <button onClick={() => changeDurationHandler()}>
        <Switch duration={durationCurrent} />
      </button>
      <button
        onClick={() => changeDurationHandler(Duration.Yearly)}
        className={`${
          durationCurrent == Duration.Yearly
            ? 'text-marine-blue'
            : 'text-cool-gray'
        } mx-5 font-medium`}
      >
        Yearly
      </button>
    </div>
  )
}

export default forwardRef(PlanDurationSwitch)
