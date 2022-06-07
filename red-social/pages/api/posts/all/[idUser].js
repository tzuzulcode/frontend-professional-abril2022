import {PrismaClient} from '@prisma/client'
const client = new PrismaClient()

export default async function getAll(req,res){
    const {idUser} = req.query
    const posts = await client.post.findMany({
        where:{
            author:{
                id:idUser
            }
        }
    })

    return res.json(posts)
}