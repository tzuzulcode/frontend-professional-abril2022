import React from 'react'
import {FaFacebook} from 'react-icons/fa'

export default function FacebookAuthButton({csrfToken}) {
  return (
    <form className='bg-gray-900 py-2 px-5 rounded-md' action='/api/auth/signin/facebook' method='POST'>
        <input type="hidden" name='csrfToken' defaultValue={csrfToken} />
        <button className='flex items-center justify-center gap-2 text-white'><FaFacebook className='w-5 h-5'/> Facebook</button>
    </form>
  )
}
