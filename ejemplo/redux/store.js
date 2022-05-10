import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth'
import cartReducer from '../features/cart'

const store = configureStore({
    reducer:{
        cart:cartReducer,
        auth:authReducer
    }
})


export default store