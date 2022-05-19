import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'

import Link from 'next/link'
import { addToCart, removeFromCart } from '../features/cart'

import {PayPalButtons,PayPalScriptProvider} from '@paypal/react-paypal-js'

export default function Home() {

  const dispatch = useDispatch() //La función que nos permite actualizar el estado global
  const items = useSelector(state=>state.cart.items)//La función que nos permite leer del estado global
  const addProductToCart = ()=>{
    dispatch(addToCart({
      name:"Producto",
      price:123.123,
      id:1
    }))
  }

  const removeProductFromCart = ()=>{
    dispatch(removeFromCart(1))
  }

  const pay = () =>{
    axios.get("/api/payment/stripe-checkout")
    .then(({data})=>{
      location.href = data.url
    })
    .catch(error=>console.log(error))
  }

  const createrOrder = async ()=>{
    const result = await axios.post("/api/payment/createOrder")

    return result.data.orderID
  }

  const onApprove = (data)=>{
    console.log(data)
  }

  return (
    <main>
      {/* <a href='/productos'>Ir a productos</a> */}
      <div>
        <p>Productos en el carrito: {items.length}</p>
        <Link href='/productos'>Ir a productos</Link>
        <button onClick={addProductToCart}>Agregar al carrito</button>
        <button onClick={removeProductFromCart}>Retirar del carrito</button>
      </div>

      {/* <button onClick={pay}>Pagar</button> */}

      <button onClick={pay}>Pagar</button>
      <PayPalScriptProvider
        options={{
          'client-id':process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
          'currency':'USD'
        }}
      >
        <PayPalButtons
          style={{
            color:"blue",
            shape:"rect",
            label:"pay",
            height:25
          }}

          createOrder={createrOrder}
          onApprove={onApprove}
        >

        </PayPalButtons>
      </PayPalScriptProvider>
    </main>
  )
}
