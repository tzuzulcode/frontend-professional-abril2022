import React, { useRef } from 'react'
import {Formik,Form,Field} from 'formik'
import axios from 'axios'
import AdminPage from '../../../components/AdminPage'
import dynamic from 'next/dynamic'

let Editor
if(typeof window!=="undefined"){
  Editor = dynamic(
    ()=>import("../../../components/Editor"),
    {ssr:false}
  )
}

export default function Add() {

  const editor = useRef()

  const createHome = async (data)=>{

    const content = await editor.current.save()
    console.log(content)

    // const parsedData = {
    //   ...data,
    //   homeDetails:{...data.homeDetails}
    // }
    // parsedData.homeDetails.images = data.homeDetails.images.split(",")
    // const {data:home} = await axios.post("/api/homes/create",parsedData)
    // console.log(home)
  }
  return (
    <AdminPage>
        <h1>Add home</h1>
        <Formik
          initialValues={{
            homeDetails:{
              title:"",
              images:"",
              price:0,
              type:"HOME",
            },
            locationDetails:{
              country:"",
              state:"",
              city:"",
              street:"",
              number:0,
              zipCode:0
            },
          }}
          onSubmit={createHome}
        >
          <Form>
            <Field type="text" name="homeDetails.title" placeholder="Title..." />
            <Field type="text" name="homeDetails.images" placeholder="Images..." />
            <Field type="number" name="homeDetails.price" placeholder="Price..." />
            {/* type */}
            <Field as="select" name="homeDetails.type">
              <option value="HOME">Home</option>
              <option value="DEPARTMENT">Department</option>
            </Field>
            <Field type="text" name="locationDetails.country" placeholder="Country..." />
            <Field type="text" name="locationDetails.state" placeholder="State..." />
            <Field type="text" name="locationDetails.city" placeholder="City..." />
            <Field type="text" name="locationDetails.street" placeholder="Street..." />
            <Field type="number" name="locationDetails.number" placeholder="Number..." />
            <Field type="number" name="locationDetails.zipCode" placeholder="ZipCode..." />

            <button type='submit'>Save</button>
          </Form>
        </Formik>
        <div className='bg-red-500 w-screen h-screen'>
          {Editor&&<Editor instance={editor}/>}
        </div>
    </AdminPage>
  )
}
