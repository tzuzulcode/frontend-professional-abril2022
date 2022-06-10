import {PrismaClient} from '@prisma/client'
const client = new PrismaClient()

export default async function friendshipRequest(req,res){
    if(req.method==="POST"){
        const {idUser,idFriend,accept} = req.body
        if(accept){
            const friend = await client.user.findUnique({
                where:{
                    id:idFriend
                }
            })
            await client.user.update({
                where:{
                    id: idFriend
                },
                data:{
                    frienOfids:{
                        push:idUser
                    },
                    myFriendsIds:{
                        push:idUser
                    },
                    friendShipRequestsSendedIds:friend.friendShipRequestsSendedIds.filter(id=>id!=idUser)
                },
            })

            const user = await client.user.findUnique({
                where:{
                    id:idUser
                }
            })
    
            const newUser = await client.user.update({
                where:{
                    id: idUser
                },
                data:{
                    frienOfids:{
                        push:idFriend
                    },
                    myFriendsIds:{
                        push:idFriend
                    },
                    friendShipRequestReceivedIds:user.friendShipRequestReceivedIds.filter(id=>id!=idFriend)
                },
                include:{
                    friendshipRequestsReceived:true,
                    friendshipRequestsSended:true
                }
            })
        }

        
        const users = await client.user.findMany({
            where:{
                id:{
                    notIn:[idUser,...newUser.myFriendsIds,...newUser.friendShipRequestReceivedIds,...newUser.friendShipRequestsSendedIds]
                }
            }
        })

        return res.json({
            people:users,
            receivedRequests:newUser.friendshipRequestsReceived,
            sendedRequests:newUser.friendshipRequestsSended,
        })
    }
}