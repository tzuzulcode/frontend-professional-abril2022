import {PrismaClient} from '@prisma/client'
const client = new PrismaClient()

export default async function getAll(req,res){
    const users = await client.user.findMany()
    return res.json(users)
}