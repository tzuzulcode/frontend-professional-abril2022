import React from 'react'
import {FcGoogle} from 'react-icons/fc'

export default function GoogleAuthButton({csrfToken}) {
  return (
    <form className='bg-gray-900 py-2 px-5 rounded-md' action='/api/auth/signin/google' method='POST'>
        <input type="hidden" name='csrfToken' defaultValue={csrfToken} />
        <button className='flex items-center justify-center gap-2 text-white'><FcGoogle className='w-6 h-6'/> Google</button>
    </form>
  )
}
