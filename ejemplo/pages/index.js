import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useDispatch, useSelector} from 'react-redux'

import Link from 'next/link'
import { addToCart, removeFromCart } from '../features/cart'

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

      <a href="/api/payment/stripe-checkout">Pagar</a>
    </main>
  )
}
