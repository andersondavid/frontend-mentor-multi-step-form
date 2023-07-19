import React from 'react'
import { z } from 'zod'

type PropTypes = {
  placeholder: string
  label: string
  register: any
  error: z.ZodIssue | undefined
  id: string
  type: string
  name: string
}

export default function InputField({
  placeholder,
  label,
  register,
  error,
  id,
  name,
  type,
  ...inputProps
}: PropTypes) {
  const errorCheck = error?.path[0] === name

  return (
    <div className="pt-2">
      <div className="flex justify-between pb-[2px]">
        <label htmlFor={name} className="block text-sm text-marine-blue">
          {label}
        </label>
        {errorCheck && (
          <p className="block text-sm font-bold text-strawberry-red">
            {error?.message}
          </p>
        )}
      </div>
      <div
        className={`rounded-md border-[1px] border-solid  ${
          errorCheck ? 'border-strawberry-red' : 'border-light-gray'
        }`}
      >
        <input
          placeholder={placeholder}
          className="w-full bg-transparent px-4 py-2 font-medium"
          id={id}
          required={false}
          name={name}
          type={type}
          {...inputProps}
          {...register(name)}
        />
      </div>
    </div>
  )
}
