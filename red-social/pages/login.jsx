import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../config/firebase'

export default function Login() {

    const login = (values,API) =>{
        console.log(values)
        console.log(API)
        signInWithEmailAndPassword(auth,values.email,values.password)
    }

  return (
    <>
        <Formik 
            initialValues={{
                email:"",
                password:""
            }}

            onSubmit={login}
        >
            <Form>
                <Field type="email" name="email"/>
                <Field type="password" name="password"/>
                <button>Iniciar sesión</button>
            </Form>
        </Formik>
    </>
  )
}
