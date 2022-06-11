import {PrismaClient} from '@prisma/client'
const client = new PrismaClient()

export default async function friendshipRequest(req,res){
    if(req.method==="POST"){
        const {idUser,idFriend,accepted} = req.body
        const friend = await client.user.findUnique({
            where:{
                id:idFriend
            }
        })
        const user = await client.user.findUnique({
            where:{
                id:idUser
            }
        })

        let newUser

        if(accepted){
            await client.user.update({
                where:{
                    id: idFriend
                },
                data:{
                    friendOfids:{
                        push:idUser
                    },
                    myFriendsIds:{
                        push:idUser
                    },
                    friendShipRequestsSendedIds:friend.friendShipRequestsSendedIds.filter(id=>id!=idUser)
                },
            })

            
    
            newUser = await client.user.update({
                where:{
                    id: idUser
                },
                data:{
                    friendOfids:{
                        push:idFriend
                    },
                    myFriendsIds:{
                        push:idFriend
                    },
                    friendShipRequestReceivedIds:user.friendShipRequestReceivedIds.filter(id=>id!=idFriend)
                },
                include:{
                    friendshipRequestsReceived:true,
                    friendshipRequestsSended:true,
                    myFriends:true
                }
            })
        }else{
            
            await client.user.update({
                where:{
                    id: idFriend
                },
                data:{
                    friendShipRequestsSendedIds:friend.friendShipRequestsSendedIds.filter(id=>id!=idUser)
                },
            })
    
            newUser = await client.user.update({
                where:{
                    id: idUser
                },
                data:{
                    friendShipRequestReceivedIds:user.friendShipRequestReceivedIds.filter(id=>id!=idFriend)
                },
                include:{
                    friendshipRequestsReceived:true,
                    friendshipRequestsSended:true,
                    myFriends:true
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
            friends:newUser.myFriends
        })
    }
}