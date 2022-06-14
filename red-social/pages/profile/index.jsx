import React, { useEffect } from 'react'
import { Formik, Form, Field} from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, getAllPosts } from '../../features/posts'
import Posts from '../../components/Posts'
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from 'next/dynamic'
import { useState } from 'react'
const MarkdownEditor = dynamic(()=>{
    return import('@uiw/react-md-editor')
    .then(mod=>mod.default)
},{ssr:false})

export default function Profile() {
    const dispatch = useDispatch()
    const {posts} = useSelector(state=>state.posts)
    const [editor,setEditor] = useState("")

    const uploadPost = (values,{setSubmitting})=>{
        dispatch(createPost({
            image:values.image,
            content:editor
        }))
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
                image:""
            }}
        >
            <Form>
                <MarkdownEditor 
                    value={editor}
                    onChange={(value,event,editor)=>{
                        console.log(value)
                        console.log(event)
                        console.log(editor)
                        setEditor(value)
                    }}
                />
                <Field placeholder="Image..." type="text" name="image"/>
                <button type='submit'>Post</button>
            </Form>
        </Formik>

        <Posts posts={posts}/>
    </div>
  )
}
