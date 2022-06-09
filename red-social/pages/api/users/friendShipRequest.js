import {PrismaClient} from '@prisma/client'
const client = new PrismaClient()

export default async function friendshipRequest(req,res){

    const {idUser,idFriend} = req.body

    const fr = await client.user.update({
        where:{
            id: idUser
        },
        data:{
            friendShipRequestsSendedIds:{
                push:idFriend
            }
        }
    })

    return res.json(fr)
}