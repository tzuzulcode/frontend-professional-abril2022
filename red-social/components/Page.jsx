import React, { useEffect } from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../config/firebase'
import {useDispatch} from 'react-redux'
import { login, logout } from '../features/auth'
import Navbar from './Navbar'
import { getAllPosts, getFriendsPosts } from '../features/posts'
import { getPeopleForUser } from '../features/users'

export default function Page({children}) {
    const dispatch = useDispatch()

    useEffect(()=>{
        document.documentElement.setAttribute('data-color-mode', 'light')
        onAuthStateChanged(auth,(authResult)=>{
            if(authResult){
                console.log(authResult)
                dispatch(login({
                    email:authResult.email,
                    name:authResult.displayName,
                    profilePic:authResult.photoURL,
                    provider:authResult.providerId,
                    idProvider:authResult.uid
                }))
                .then(()=>{
                    dispatch(getAllPosts())
                    dispatch(getFriendsPosts())
                    dispatch(getPeopleForUser())
                })
                
            }else{
                dispatch(logout())
            }
        })
    },[])
  return (
    <div className='bg-gray-100'>
        <Navbar/>
        {children}
    </div>
  )
}
