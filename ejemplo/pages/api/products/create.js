const stripe = require("stripe")(process.env.STRIPE_SK)
import {database} from '../../../config/firebase'
import {collection,addDoc} from 'firebase/firestore'

export default async function createProduct(req,res){
    if(req.method === "POST"){
        const data = req.body

        const stripeProduct = await stripe.products.create(
            data
        )

        data.priceID = stripeProduct.default_price

        console.log(stripeProduct)

        const col = collection(database,"products")


        const product = await addDoc(col,data)

        return res.json(data)
    }


    return res.status(405).json({message:"Method not allowed"})


}