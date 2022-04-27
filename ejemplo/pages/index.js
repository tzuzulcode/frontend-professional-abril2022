import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <a href='/productos'>Ir a productos</a>
      <div>
      <Link href='/productos'>Ir a productos</Link>
      </div>
    </main>
  )
}
