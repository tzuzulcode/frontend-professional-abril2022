import {PrismaClient} from '@prisma/client'
const client = new PrismaClient()

export default async function login(req,res){
    if(req.method==="POST"){
        const user = await client.user.findFirst({
            where:{
                idProvider:req.body.idProvider,
                provider:req.body.provider
            }
        })

        if(user){
            return res.json(user)

        }

        const newUser = await client.user.create({
            data:{
                idProvider:req.body.idProvider,
                provider:req.body.provider
            }
        })
        return res.json(newUser)

    }

    return res.json({
        success:true
    })
}