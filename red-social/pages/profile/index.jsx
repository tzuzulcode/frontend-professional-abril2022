import React, { useEffect } from 'react'
import { Formik, Form, Field} from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, getAllPosts } from '../../features/posts'
import Posts from '../../components/Posts'

export default function Profile() {
    const dispatch = useDispatch()
    const {posts} = useSelector(state=>state.posts)

    const uploadPost = (values,{setSubmitting})=>{
        dispatch(createPost(
            values
        ))
        .then(()=>{
            setSubmitting(false)
        })
    }

    // useEffect(()=>{
    //     dispatch(getAllPosts())
    // },[])

  return (
    <div>
        <h1>My profile</h1>

        <Formik 
            onSubmit={uploadPost}
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

        <Posts posts={posts}/>
    </div>
  )
}
