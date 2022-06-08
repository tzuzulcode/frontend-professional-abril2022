import React, { useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import {signOut} from 'firebase/auth'
import { auth as authInstance} from '../config/firebase'
import { useRouter } from 'next/router'

export default function Navbar() {
    const [open,setOpen] = useState(false)

    const auth = useSelector(state=>state.auth)
    const router = useRouter()


    const logOut = () =>{
        signOut(authInstance)
        setOpen(false)
        router.push("/")
    }
    return (
        <nav className='bg-indigo-900 p-5 relative'>
            {console.log(auth)}
            <ul className='flex items-center gap-5 text-white'>
                <li><Link href="/">Home</Link></li>
                {!auth.logged&&<li><Link href="/login">Login</Link></li>}
                {
                    auth.logged&&<>
                        <li><Link href="/profile">My profile</Link></li>
                        <li><Link href="/people">Personas</Link></li>
                    </>
                }
                {auth.logged&&<li className='ml-auto'>
                    <div onClick={()=>{setOpen(!open)}} className='flex gap-3 items-center'>
                        <img className='w-8 h-8 rounded-full' src={auth.user.profilePic} alt="" />
                        {auth.user.name}
                        </div>
                    </li>}

            </ul>
            {open&&<div className='absolute top-20 right-5 bg-indigo-700  text-white p-5'>
                <button onClick={logOut}>Cerrar sesión</button>
            </div>}
        </nav>
  )
}
