import React from 'react'

export default function ThankYou() {
  return (
    <article>
      <div className='py-9 text-center'>
        <picture>
          <img className='m-auto h-14' src="assets/images/icon-thank-you.svg" />
        </picture>
        <div>
          <h1 className='font-bold text-marine-blue text-2xl mt-6 mb-3'>Thank you!</h1>
          <p className='font-ubuntu text-cool-gray'>Thanks for confirming your subscription!</p>
          <p className='font-ubuntu text-cool-gray'>
            We hope you have fun using our platform. If you need support, please
            feel free to email us at support@loremgaming.com.
          </p>
        </div>
      </div>
    </article>
  )
}
