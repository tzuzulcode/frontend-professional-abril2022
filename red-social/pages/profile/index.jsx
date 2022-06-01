import React from 'react'
import { Formik, Form, Field} from 'formik'

export default function Profile() {

    const createPost = (values,{setSubmitting})=>{
        console.log(values)
    }

  return (
    <div>
        <h1>My profile</h1>

        <Formik 
            onSubmit={createPost}
            initialValues={{
                content:"",
                image:""
            }}
        >
            <Form>
                <Field placeholder="Contenido..." type="text" name="content"/>
                <Field placeholder="Image..." type="text" name="image"/>
                <button type='submit'>Post</button>
            </Form>
        </Formik>
    </div>
  )
}
