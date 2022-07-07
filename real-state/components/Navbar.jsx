import React from 'react'
import Link from 'next/link'
import {signOut,useSession} from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession()
  return (
    <nav>
        {console.log(session)}
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
               <Link href="/login">Login</Link>
            </li>
            {session&&<>
              <li>
                <button onClick={signOut}>Cerrar sesión</button>
              </li>
              {session.user.role==="ADMIN"&&<li>
                <Link href="/admin/homes/add">Add home</Link>
              </li>}
            </>}
        </ul>
    </nav>
  )
}
