'use client'

import React from 'react'
import { useForm, Resolver } from 'react-hook-form'
import InputField from '../../components/InputField'

type FormValues = {
  name: string
  email: string
  phone: string
}

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
          name: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  }
}

export default function PersonalInfo() {
  const { register, handleSubmit, formState } = useForm<FormValues>()
  const { errors } = formState
  

  const onSubmit = handleSubmit((data: FormValues) => {
    console.log('data ', data)
    console.log('errors ', errors)
  })

  return (
    <article>
      <h2 className="page-title">Personal info</h2>
      <p className="page-desc text-cool-gray">
        Please provide your name, email adress, and phone number.
      </p>
      <div className="">
        <form onSubmit={onSubmit} noValidate>
          <InputField
            register={register}
            id={'name'}
            name={'name'}
            error={{}}
            label="Name"
            placeholder="e.g. Stephen King"
          />
          <InputField
            register={register}
            id={'email'}
            name={'email'}
            error={{}}
            label="Email Andress"
            placeholder="e.g. stephenking@lorem.com"
          />
          <InputField
            register={register}
            id={'phone'}
            name={'phone'}
            error={{}}
            label="Phone Number"
            placeholder="e.g. + 1 234 567 890"
          />
          {errors.name && JSON.stringify(errors)}
          <input type="submit" value={'Oiasdasdasdasd'} />
        </form>
      </div>
    </article>
  )
}
