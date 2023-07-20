import React from 'react'

type PropsTypes = {
  next?: Pages
  previous?: Pages
  confirm?: () => void
}

export default function FooterNavigation({
    next,
    previous,
    confirm
}: PropsTypes) {

  const navigator = (router: Pages) => {
    return
  }

  return (
    <div className="fixed bottom-0 left-0 flex w-full justify-between bg-white">
      {previous && (
        <button
          onClick={() => navigator(previous)}
          className="mx-2 my-4 rounded-md p-2 font-medium text-cool-gray"
        >
          Go Back
        </button>
      )}
      {next && (
        <button
          onClick={() => navigator(next)}
          className="m-4 ml-auto rounded-md bg-marine-blue p-2 px-4 font-medium text-white"
        >
          Next Step
        </button>
      )}
      {confirm && (
        <button
          onClick={() => confirm()}
          className="m-4 ml-auto rounded-md bg-purplish-blue p-2 px-4 font-medium text-white"
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
