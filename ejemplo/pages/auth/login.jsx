import React, { useState } from 'react'
import {useRouter} from 'next/router'
import { auth } from '../../config/firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  // EmailAuthProvider,
  updateProfile
} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import {updateData} from '../../features/auth/index' 

const config = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        // EmailAuthProvider.PROVIDER_ID,
    ],
}

export default function Login() {
  const [isLogin,setIsLogin] = useState(true)
  const dispatch = useDispatch()
  const router = useRouter()

  const login = (event) =>{
    event.preventDefault()
    // const {email:{value:email},password:{value:password}} = event.target
    const email = event.target.email.value
    const password = event.target.password.value

    if(isLogin){
      signInWithEmailAndPassword(auth,email,password)
      .then(result=>{
        router.replace("/")
      })
      .catch(error=>{
        console.log(error)
      })
    }else{
      const name = event.target.name.value
      const profilePic = event.target.profilePic.value
      createUserWithEmailAndPassword(auth,email,password)
      .then(result=>{
        updateProfile(result.user,{
          displayName:name,
          photoURL:profilePic
        }).then(()=>{
          
          dispatch(updateData({
            name,
            profilePic
          }))
          router.replace("/")
        })
        
      }).catch(error=>{
        console.log(error)
      })
    }


    
  }
  return (
    <div>
        <section className='bg-gray-100 w-1/2 mx-auto p-5 shadow-md rounded-md'>
          <h2 className='text-center text-4xl font-bold my-10'>
            {isLogin?
              "Inicia sesión en tu cuenta":
              "¡Crea una cuenta, es gratis!"
            }
          </h2>
          <StyledFirebaseAuth uiConfig={config} firebaseAuth={auth}/>
          <form onSubmit={login} className="flex flex-col">
            {!isLogin&&<input className='my-2 p-2 rounded-sm shadow-md border border-gray-300 w-1/2 mx-auto' type="text" name='name' placeholder='Name...' />}
            {!isLogin&&<input className='my-2 p-2 rounded-sm shadow-md border border-gray-300 w-1/2 mx-auto' type="text" name='profilePic' placeholder='Profile pic...' />}
            <input className='my-2 p-2 rounded-sm shadow-md border border-gray-300 w-1/2 mx-auto' type="email" name="email" placeholder='Email...' />
            <input className='my-2 p-2 rounded-sm shadow-md border border-gray-300 w-1/2 mx-auto' type="password" name="password" placeholder='Password...' />
            <button className='bg-cyan-900 hover:bg-yellow-500 p-2 rounded-sm mt-5 text-white hover:text-yellow-900 w-1/2 mx-auto'>
              {
                isLogin?
                  "Iniciar sesión":
                  "Crear cuenta"
              }
            </button>
          </form>
          <div className="w-1/2 mx-auto mt-5 text-cyan-700 hover:text-yellow-600">
            <button 
              onClick={()=>{setIsLogin(!isLogin)}}
              
            >
              {
                isLogin?
                  "¿No tienes una cuenta? ¡Registrate!":
                  "Iniciar sesión"
              }
            </button>
          </div>
        </section>
    </div>
  )
}
