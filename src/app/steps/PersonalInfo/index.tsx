import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import InputField from './InputField'
import FooterNavigation, { Pages } from '@/app/components/FooterNavigation'

import { Context } from '@/store/context'

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
  const [saveValues, setSaveValues] = useState({})
  const [listErrors, setListErrors] = useState<z.ZodIssue | undefined>()
  const { state, dispatch } = useContext(Context)

  const onBlur = () => {
    const data = getValues()
    const validInputs = schema.safeParse(data)
    if (validInputs.success) {
      setSaveValues(validInputs.data)
      setListErrors(undefined)
    } else {
      let errors = validInputs.error?.issues[0]
      setListErrors(errors)
    }
  }

  const sendToContext = () => {
    const data = getValues()
    const validInputs = schema.safeParse(data)

    if (validInputs.success) {
      dispatch({
        type: 'PERSONAL_INFO',
        payload: { PersonalInfo: validInputs.data },
      })
    }
  }

  

  return (
    <article className="relative h-full w-full bg-white md:pt-[45px]">
      <h2 className="page-title">Personal info</h2>
      <p className="page-desc">
        Please provide your name, email adress, and phone number.
      </p>
      <div className="mt-6">
        <InputField
          register={register}
          error={listErrors}
          id={'name'}
          key={'name'}
          name={'name'}
          label={'Name'}
          type={'text'}
          onBlur={onBlur}
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
          onBlur={onBlur}
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
          onBlur={onBlur}
          placeholder="e.g. + 1 234 567 890"
        />
      </div>
      <button onClick={sendToContext}>Send To Context</button>
      <FooterNavigation next={Pages.SELECT_YOUR_PLAN} />
    </article>
  )
}
