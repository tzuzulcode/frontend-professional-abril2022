import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getPeopleForUser = createAsyncThunk("users/getForUser",async (data,thunkAPI)=>{
    const state = thunkAPI.getState()
    const idUser = state.auth.user.id

    const users = await axios.get("/api/users/all/"+idUser)

    return users.data
})

export const sendFriendsRequest= createAsyncThunk("users/sendFriendShipRequest",async(data,thunkAPI)=>{
    const {idFriend} = data
    const state = thunkAPI.getState()
    const idUser = state.auth.user.id

    const users = await axios.post("/api/users/friendShipRequest",{
        idUser,idFriend
    })

    return users.data
})


const usersSlice = createSlice({
    name:"users",
    initialState:{
        people:[],
        receivedRequests:[],
        sendedRequests:[],
        loading:false
    },
    extraReducers(builder){
        builder.addCase(getPeopleForUser.fulfilled,(state,action)=>{
            state.people = action.payload.people
            state.receivedRequests = action.payload.receivedRequests
            state.sendedRequests = action.payload.sendedRequests
            state.loading = false
        })
        builder.addCase(getPeopleForUser.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(getPeopleForUser.rejected,(state,action)=>{
            state.loading = false
        })
        builder.addCase(sendFriendsRequest.fulfilled,(state,action)=>{
            state.people = action.payload.people
            state.receivedRequests = action.payload.receivedRequests
            state.sendedRequests = action.payload.sendedRequests
            state.loading = false
        })
        builder.addCase(sendFriendsRequest.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(sendFriendsRequest.rejected,(state,action)=>{
            state.loading = false
        })
    }
})


export default usersSlice.reducer