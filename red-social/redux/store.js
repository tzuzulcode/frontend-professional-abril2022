import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth'
import postsReducer from '../features/posts'
import usersReducer from '../features/users'


const store = configureStore({
    reducer:{
        auth:authReducer,
        posts:postsReducer,
        users: usersReducer
    }
})

export default store