import { getCsrfToken } from 'next-auth/react'
import React from 'react'
import GoogleAuthButton from '../components/GoogleAuthButton'
import FacebookAuthButton from '../components/FacebookAuthButton'

export async function getServerSideProps(context){
    const csrfToken = await getCsrfToken(context)

    return {
        props:{
            csrfToken
        }
    }
}

export default function Login({csrfToken}) {
  return (
    <div className='w-max mx-auto space-y-5'>
        <GoogleAuthButton csrfToken={csrfToken}/>
        <FacebookAuthButton csrfToken={csrfToken}/>
    </div>
  )
}
