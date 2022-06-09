import {PrismaClient} from '@prisma/client'
const client = new PrismaClient()

export default async function getAll(req,res){
    const {idUser} = req.query
    const users = await client.user.findMany({
        where:{
            id:{
                notIn:[idUser]
            }
        }
    })
    return res.json(users)
}