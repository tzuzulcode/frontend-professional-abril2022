import {createSlice} from '@reduxjs/toolkit'


const authSlice = createSlice({
    name:"auth",
    initialState:{
        logged:false,
        loading:false,
        user:{
            email:"",
            id:"",
            profilePic:""
        }
    },
    reducers:{

    }
})


const authReducer = authSlice.reducer

export default authReducer

export const {} = authSlice.actions