import React from 'react'
//import {useRouter} from 'next/router'
import {database} from '../../config/firebase'
import {collection,doc,getDocs,getDoc} from 'firebase/firestore'

// export function getServerSideProps(context){

//     console.log(context)
//     const {id} = context.params

//     return {
//         props:{
//             id
//         }
//     }
// }

export async function getStaticPaths(){
    const col = collection(database,"productos")
    const docs = await getDocs(col)

    const productos = []

    docs.forEach(doc=>{
        productos.push({...doc.data(),id:doc.id})
    })

    const paths = productos.map(producto=>({
        params:{
            id:producto.id
        }
    }))

    console.log(paths)

    return {
        paths,
        fallback:false // Si visitamos una ruta que no existe, devolvemos un 404
    }
}

export async function getStaticProps({params}){
    const document = doc(database,"productos",params.id)
    const productDocument = await getDoc(document)

    const producto = productDocument.data()

    return {
        props:{
            producto
        }
    }
}

export default function Producto(props) {
    // const router = useRouter()
    // const id = router.query.id
    //if(producto === undefined) {return}
    console.log(props)
    return (
        <div>{props.producto.name}</div>
    )
}
