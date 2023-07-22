'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import InputField from './InputField'
import FooterNavigation, { Pages } from '../../components/FooterNavigation'

const schema = z.object({
  name: z.string().min(1, 'This field is required'),
  phone: z.string().min(1, 'This field is required'),
  email: z
    .string({ required_error: 'This field is required' })
    .email({ message: 'Invalid email address' }),
})

type FormValues = z.infer<typeof schema>

export default function PersonalInfo() {
  const { register, getValues } = useForm<FormValues>()
  const [listErrors, setListErrors] = useState<z.ZodIssue | undefined>()

  const onSubmit = () => {
    const data = getValues()
    const validInputs = schema.safeParse(data)
    if (validInputs.success) {
      setListErrors(undefined)
    } else {
      let errors = validInputs.error?.issues[0]
      setListErrors(errors)
    }
  }

  return (
    <article className="relative h-full w-full">
      <h2 className="page-title">Personal info</h2>
      <p className="page-desc text-cool-gray">
        Please provide your name, email adress, and phone number.
      </p>
      <div className="">
        <InputField
          register={register}
          error={listErrors}
          id={'name'}
          key={'name'}
          name={'name'}
          label={'Name'}
          type={'text'}
          placeholder="e.g. Stephen King"
        />
        <InputField
          register={register}
          error={listErrors}
          id={'email'}
          key={'email'}
          name={'email'}
          label={'Email Andress'}
          type={'email'}
          placeholder="e.g. stephenking@lorem.com"
        />
        <InputField
          register={register}
          error={listErrors}
          id={'phone'}
          key={'phone'}
          name={'phone'}
          label={'Phone Number'}
          type={'text'}
          placeholder="e.g. + 1 234 567 890"
        />
      </div>
      <FooterNavigation
        next={Pages.SELECT_YOUR_PLAN}
        previous={Pages.FINISHING_UP}
      />
    </article>
  )
}
