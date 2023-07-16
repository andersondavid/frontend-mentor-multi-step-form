import React from 'react'
import InputField from '../../InputField'

export default function PersonalInfo() {
  return (
    <article>
      <h2 className='page-title'>Personal info</h2>
      <p className='page-desc text-cool-gray'>Please provide your name, email adress, and phone number.</p>
      <div className=''>
        <InputField label='Name' placeholder='e.g. Stephen King' />
        <InputField label='Email Andress' placeholder='e.g. stephenking@lorem.com' />
        <InputField label='Phone Number' placeholder='e.g. + 1 234 567 890' />
      </div>
    </article>
  )
}
