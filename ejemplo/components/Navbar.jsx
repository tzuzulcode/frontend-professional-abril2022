import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import {signOut} from 'firebase/auth'
import { auth } from '../config/firebase'


export default function Navbar() {
    const {logged,name,profilePic} = useSelector(state=>state.auth)

    const logout = ()=>{
        signOut(auth)
    }
    return (
        <nav>
            <ul>
                <li>Home</li>
                {
                    logged?
                    <li><button onClick={logout}>Cerrar sesión</button></li>
                    :
                    <li><Link href="/auth/login">Inicio de sesión</Link></li>

                }
                {logged&&<li>
                    <div>
                        <img src={profilePic}></img>
                        <p>{name}</p>
                    </div>
                </li>}
            </ul>
        </nav>
    )
}
