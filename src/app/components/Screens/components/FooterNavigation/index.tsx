import React from 'react'

type PropsTypes = {
  changePage: () => void
}

export default function FooterNavigation({ changePage }: PropsTypes) {
  return (
    <div className="fixed bottom-0 left-0 flex w-full justify-between bg-white">
      <button className="mx-2 my-4 rounded-md p-2 font-medium text-cool-gray">
        Go Back
      </button>
      <button onClick={changePage} className="m-4 ml-auto rounded-md bg-marine-blue p-2 px-4 font-medium text-white">
        Next Step
      </button>
    </div>
  )
}
