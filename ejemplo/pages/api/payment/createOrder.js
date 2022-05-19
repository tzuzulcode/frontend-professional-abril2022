import paypal from '@paypal/checkout-server-sdk'
import client from '../../../libs/paypal_client'

export default async function createOrder(req,res){
    const request = new paypal.orders.OrdersCreateRequest()

    request.headers["Prefer"] = "return=Representation"

    request.requestBody({
        intent:"CAPTURE",
        purchase_units:[
            {
                amount:{
                    value:"100",
                    currency_code:"USD"
                }
            }
        ]
    })

    const response = await client.execute(request)

    if(response.statusCode!==201){
        return res.status(400).json({
            message:"Ocurrio un error al generar orden"
        })
    }

    return res.json({
        orderID:response.result.id
    })
}
