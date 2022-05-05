import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            const newProduct = action.payload
            state.items.push(newProduct)
        },
        removeFromCart:(state,action)=>{
            const id = action.payload
            state.items = state.items.filter(item=>item.id!==id)
        }
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
export const {addToCart,removeFromCart} = cartSlice.actions
export default cartReducer