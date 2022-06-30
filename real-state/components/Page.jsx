import React from 'react'
import Navbar from './navbar'

export default function Page({children}) {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}
