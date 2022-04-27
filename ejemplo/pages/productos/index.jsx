import React,{useEffect,useState} from 'react'

// Si utlizamos esta función, estaremos usando SSR
// export async function getServerSideProps(){
//   const productosRequest = await fetch('http://localhost:3000/api/products')

//   const productos = await productosRequest.json()

//   return{
//     props:{
//       productos
//     }
//   }
// }

//Utilizamos esta función si queremos SSG (Static Site Generation)
export async function getStaticProps(){
  const productosRequest = await fetch('http://localhost:3000/api/products')

  const productos = await productosRequest.json()

  return{
    props:{
      productos
    }
  }
}

export default function Productos({productos}) {

  // const [productos, setProductos] = useState([])

  //Client-side rendering
  // useEffect(() => {
    
  //   fetch('http://localhost:3000/api/products')
  //   .then(response=>response.json())
  //   .then(data=>{
  //     setProductos(data)
  //   })
  // }, [])
  

  return (
    <div>
      {productos.map(producto=>{
        return <article key={producto.id}>
          <h2>{producto.name}</h2>
          <p>{producto.description}</p>
        </article>
      })}
    </div>
  )
}
