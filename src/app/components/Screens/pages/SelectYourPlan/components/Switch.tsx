import React from 'react'

type PropsTypes = {
  duration: Duration
}

enum Duration {
  Monthy = 'MONTHY',
  Yearly = 'YEARLY',
}

export default function Switch({ duration }: PropsTypes) {
  return (
    <div className="relative">
      <span className="block h-5 w-10 rounded-full bg-marine-blue p-1">
        <span className={`${duration == Duration.Monthy ? '' : 'ml-5'} block h-3 w-3 rounded-full bg-white transition-all`}></span>
      </span>
    </div>
  )
}
