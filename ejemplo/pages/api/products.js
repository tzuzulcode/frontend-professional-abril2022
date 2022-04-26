import {database} from '../../config/firebase'
import {collection,getDocs} from 'firebase/firestore'

export default async function getProducts(req,res){
    const col = collection(database,"productos")
    const docs = await getDocs(col)

    const data = []

    docs.forEach(doc=>{
        data.push({...doc.data(),id:doc.id})
    })

    return res.json(data)
}