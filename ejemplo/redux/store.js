import {configureStore} from '@reduxjs/toolkit'

import cartReducer from '../features/cart'

const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})


export default store