import {PrismaClient} from '@prisma/client'
const client = new PrismaClient()

export default async function getMyFriendsPosts(req,res){
    const {idUser} = req.query
    const user = await client.user.findUnique({
        where:{
            id:idUser
        }
    })
    const posts = await client.post.findMany({
        where:{
            author:{
                id:{
                    in:user.myFriendsIds
                }
            }
        },
        include:{
            author:true
        }
    })


    return res.json(posts)
}