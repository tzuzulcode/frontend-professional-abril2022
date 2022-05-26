import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const auth = useSelector(state=>state.auth)
    return (
        <nav className='bg-indigo-900 p-5'>
            {console.log(auth)}
            <ul className='flex items-center gap-5 text-white'>
                <li><Link href="/">Home</Link></li>
                {!auth.logged&&<li><Link href="/login">Login</Link></li>}
                {auth.logged&&<li className='ml-auto'><Link href="/login"><div className='flex gap-3 items-center'><img className='w-8 h-8 rounded-full' src={auth.user.profilePic} alt="" />{auth.user.name}</div></Link></li>}

            </ul>
        </nav>
  )
}
