import React from 'react'
import {useRouter} from 'next/router'

// export function getServerSideProps(context){
//     const {id} = context.params

//     return {
//         props:{
//             id
//         }
//     }
// }

export async function getStaticPaths(){
    const productosRequest = await fetch('http://localhost:3000/api/products')

    const productos = await productosRequest.json()

    const paths = productos.map(producto=>({
        params:{id:producto.id}
    }))

    console.log(paths)

    return {
        paths,
        fallback:true // Si visitamos una ruta que no existe, devolvemos un 404
    }
}

export async function getStaticProps({params}){
    return {
        props:{
            producto:{
                name:"Producto de ejemplo"
            }
        }
    }
}

export default function Producto(props) {
    // const router = useRouter()
    // const id = router.query.id
    //if(producto === undefined) {return}
    console.log(props)
    return (
        <div>{props.producto?.name}</div>
    )
}
