import React from 'react'

type PropTypes = {
  placeholder: string
  label: string
}

export default function InputField({ placeholder, label }: PropTypes) {
  return (
    <div className='pt-2'>
      <label className="block text-sm text-marine-blue">{label}</label>
      <div className="rounded-md border-[1px] border-solid border-light-gray">
        <input
          placeholder={placeholder}
          className="w-full px-4 py-2 font-medium"
        />
      </div>
    </div>
  )
}
