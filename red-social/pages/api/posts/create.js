import {PrismaClient} from '@prisma/client'
const client = new PrismaClient()

export default async function create(req,res){
    if(req.method==="POST"){
        const post = await client.post.create({
            data:{
                content:req.body.content,
                image:req.body.image,
                author:{
                    connect:{
                        id:req.body.author
                    }
                }
            }
        })
    
        return res.json(post)
    }

    return res.json({
        success:true
    })
}