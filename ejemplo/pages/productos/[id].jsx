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

    return {paths,fallback:true}
}

export function getStaticProps({params}){
    return {
        props:{
            producto:{
                id:params.id,
                name:"Producto de ejemplo"
            }
        }
    }
}

export default function Producto(props) {
    // const router = useRouter()
    // const id = router.query.id
    console.log(props)
    return (
        <div>{props.producto?.id}</div>
    )
}
