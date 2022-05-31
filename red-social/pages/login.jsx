import React, { useState } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {signInWithEmailAndPassword, signInWithPopup, GithubAuthProvider, FacebookAuthProvider, GoogleAuthProvider} from 'firebase/auth'
import { auth } from '../config/firebase'
import {useRouter} from 'next/router'
import {providerLogin,signInMethods} from '../libs/auth'


export default function Login() {

    const router = useRouter()

    const login = (values,{setSubmitting,setErrors}) =>{
        
        signInWithEmailAndPassword(auth,values.email,values.password)
        .then(result=>{
            setSubmitting(false)
            router.replace("/")
        })
        .catch(error=>{
            setSubmitting(false)
            setErrors({
                credentials:"Las credenciales son incorrectas"
            })
        })
    }

    const loginWithProvider = (id)=>{
        providerLogin(id)
        .then(result=>console.log("Success:",result))
        .catch(error=>console.log("Error",error))
    }

    

    return (
        <>
            <button 
                onClick={()=>{loginWithProvider(signInMethods.google)}}
                >Google
            </button>
            <button 
                onClick={()=>{loginWithProvider(signInMethods.facebook)}}
                >Facebook
            </button>
            <button 
                onClick={()=>{loginWithProvider(signInMethods.github)}}
                >GitHub
            </button>

            <Formik 
                initialValues={{
                    email:"",
                    password:""
                }}

                onSubmit={login}
            >
                {({errors,isSubmitting})=>{
                    return <>
                        <Form className=' bg-indigo-50 w-11/12 md:w-1/2 p-5 md:p-10 mx-auto mt-20'>
                            <h2 className=' text-center font-bold text-4xl mb-10'>Inicia sesión con tu correo</h2>
                            <div className='flex flex-col md:w-1/2 mx-auto gap-5'>
                                <Field className="p-3 rounded-md" placeholder="Email..." type="email" name="email"/>
                                <Field className="p-3 rounded-md" placeholder="Password..." type="password" name="password"/>
                                <button className={`bg-indigo-300 p-3 rounded-md text-indigo-900 hover:bg-indigo-400 ${isSubmitting&&"bg-red-500"}`}>Iniciar sesión</button>
                            </div>
                        </Form>
                        {errors&&<p>{errors.credentials}</p>}

                    </>
                }}
            </Formik>
        </>
    )
}
