const stripe = require("stripe")(process.env.STRIPE_SK)

export default async function createCheckoutSession(req,res){
    const host = req.headers.host
    
    try{
        const session = await stripe.checkout.sessions.create({
            line_items:[
                {
                    price:'price_1L0GfSGw2OQ27MiZ0wMdkhmX',
                    quantity:1  
                }
            ],
            mode:'payment',
            success_url:`http://${host}/?success=true`,
            cancel_url:`http://${host}/?success=false`
        })

        return res.json({
            url:session.url
        })
    }catch(error){
        return res.status(error.statusCode || 500).json(error.message)
    }
}