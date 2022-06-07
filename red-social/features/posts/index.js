import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const createPost = createAsyncThunk("posts/create",async (data,thunkAPI)=>{
    const state = thunkAPI.getState()

    const post = await axios.post("/api/posts/create",{
        ...data,
        author:state.auth.user.id
    })

    return post.data
})
export const getAllPosts = createAsyncThunk("posts/getAll",async (data,thunkAPI)=>{
    const state = thunkAPI.getState()
    const idUser = state.auth.user.id

    const posts = await axios.get("/api/posts/all/"+idUser)

    return posts.data
})


const postsSlice = createSlice({
    name:"posts",
    initialState:{
        posts:[],
        loading:false
    },
    extraReducers(builder){
        builder.addCase(createPost.fulfilled,(state,action)=>{
            state.posts.push(action.payload)
            state.loading = false
        })
        builder.addCase(createPost.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(createPost.rejected,(state,action)=>{
            state.loading = false
        })
        builder.addCase(getAllPosts.fulfilled,(state,action)=>{
            state.posts = action.payload
            state.loading = false
        })
        builder.addCase(getAllPosts.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(getAllPosts.rejected,(state,action)=>{
            state.loading = false
        })
    }
})


export default postsSlice.reducer