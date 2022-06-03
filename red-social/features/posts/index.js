import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {collection,addDoc} from 'firebase/firestore'
import {database} from '../../config/firebase'

const createPost = createAsyncThunk("posts/create",async (data,thunkAPI)=>{
    const state = thunkAPI.getState()
    const col = collection(database,"posts")

    const doc = await addDoc(col,{
        idUser:state.auth.user.id,
        ...data
    })

    return doc.data()

})


const postsSlice = createSlice({
    name:"posts",
    initialState:{
        posts:[],
        loading:false
    },
    extraReducers:{

    }
})