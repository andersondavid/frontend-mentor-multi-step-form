import React from 'react'

type PropsTypes = {
  next?: Pages
  previous?: Pages
  confirm?: () => void
}

export default function FooterNavigation({
  next,
  previous,
  confirm,
}: PropsTypes) {
  const navigator = (router: Pages) => {
    console.log('navigator ', router)
  }

  return (
    <div className="fixed bottom-0 left-0 flex w-full justify-between bg-white p-4 md:absolute md:absolute md:mt-auto md:px-0 md:py-4">
      {previous != undefined && (
        <button
          onClick={() => navigator(previous)}
          className="rounded-md font-medium text-cool-gray"
        >
          Go Back
        </button>
      )}
      {next != undefined && (
        <button
          onClick={() => navigator(next)}
          className="ml-auto rounded-md bg-marine-blue p-2 px-4 font-medium text-white"
        >
          Next Step
        </button>
      )}
      {confirm != undefined && (
        <button
          onClick={() => confirm()}
          className="ml-auto rounded-md bg-purplish-blue p-2 px-4 font-medium text-white"
        >
          Confirm
        </button>
      )}
    </div>
  )
}

export enum Pages {
  PERSONAL_INFO,
  SELECT_YOUR_PLAN,
  PICK_ADDONS,
  FINISHING_UP,
  THANK_YOU,
}
