import React, { useEffect } from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../config/firebase'
import {useDispatch} from 'react-redux'
import { login, logout } from '../features/auth'
import Navbar from './Navbar'

export default function Page({children}) {
    const dispatch = useDispatch()

    useEffect(()=>{
        onAuthStateChanged(auth,(authResult)=>{
            if(authResult){
                dispatch(login({
                    id:authResult.uid,
                    email:authResult.email,
                    name:authResult.displayName,
                    profilePic:authResult.photoURL
                }))
            }else{
                dispatch(logout())
            }
        })
    },[])
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}