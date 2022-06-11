import {PrismaClient} from '@prisma/client'
const client = new PrismaClient()

export default async function getAll(req,res){
    const {idUser} = req.query
    const user = await client.user.findUnique({
        where:{
            id:idUser
        },
        include:{
            friendshipRequestsReceived:true,
            friendshipRequestsSended:true,
            myFriends:true
        }
    })
    const users = await client.user.findMany({
        where:{
            id:{
                notIn:[idUser,...user.myFriendsIds,...user.friendShipRequestReceivedIds,...user.friendShipRequestsSendedIds]
            }
        }
    })
    return res.json({
        people:users,
        receivedRequests:user.friendshipRequestsReceived,
        sendedRequests:user.friendshipRequestsSended,
        friends:user.myFriends
    })
}