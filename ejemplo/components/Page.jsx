import React from 'react'
import { useDispatch} from 'react-redux'
import { useEffect } from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from '../config/firebase'
import { login, logout } from '../features/auth'
import Navbar from './Navbar'

export default function Page({children}) {
    const dispatch = useDispatch()
    useEffect(()=>{
        onAuthStateChanged(auth,(result)=>{
            if(result){
                dispatch(login({
                    name:result.displayName,
                    profilePic:result.photoURL,
                    id:result.uid
                }))
            }else{
                // result es null
                dispatch(logout())
            }
        })

        // dispatch Recover cart
    },[])
    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}
