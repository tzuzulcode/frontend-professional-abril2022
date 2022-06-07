import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const login = createAsyncThunk("auth/login",async (data,thunkAPI)=>{
    const {idProvider,provider} = data
    const user = await axios.post("/api/auth/login",{
        idProvider,
        provider
    })

    return {
        ...data,
        id:user.data.id
    }
})

const authSlice = createSlice({
    name:"auth",
    initialState:{
        logged:false,
        loading:false,
        user:{
            name:"",
            email:"",
            id:"",
            profilePic:""
        }
    },
    reducers:{
        logout(state,action){
            state.logged = false
            state.loading = false
            state.user.id = ""
            state.user.name = ""
            state.user.email = ""
            state.user.profilePic = ""
        }
    },
    extraReducers(builder){
        builder.addCase(login.fulfilled,(state,action)=>{
            state.logged = true
            state.loading = false
            state.user.id = action.payload.id
            state.user.name = action.payload.name
            state.user.email = action.payload.email
            state.user.profilePic = action.payload.profilePic
        })
    }
})


const authReducer = authSlice.reducer

export default authReducer

export const {logout} = authSlice.actions