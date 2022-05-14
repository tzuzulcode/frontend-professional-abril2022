import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {database} from '../../config/firebase'
import {collection,addDoc} from 'firebase/firestore'

export const addToCart = createAsyncThunk("cart/addToCart",async (data,thunkAPI)=>{
    
    const col = collection(database,"cart","tzuzulcode","items")
    const result = await addDoc(col,data)

    console.log(result.id)

    return data
})

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        loading:false
    },
    reducers:{
        // addToCart:(state,action)=>{
        //     const newProduct = action.payload
        //     state.items.push(newProduct)
        // },
        removeFromCart:(state,action)=>{
            const id = action.payload
            state.items = state.items.filter(item=>item.id!==id)
        }
    },
    extraReducers(builder){
        builder.addCase(addToCart.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(addToCart.fulfilled,(state,action)=>{
            state.loading = false
            state.items.push(action.payload)
        })
        builder.addCase(addToCart.rejected,(state,action)=>{
            state.loading = false
        })
    }
})


// function cartReducer(state,action){
//     let newState
//     switch(action.type){
//         case 'ADD_TO_CART':
//             const newProduct = action.payload
//             newState = [...state,newProduct]
//             break
//         case 'REMOVE_FROM_CART':
//             const id = action.payload
//             newState = state.filter((item)=>{return item.id!==id})
//             break;

//         default:
//             newState = state
//     }

//     return newState
// }



const cartReducer = cartSlice.reducer
export const {removeFromCart} = cartSlice.actions
export default cartReducer