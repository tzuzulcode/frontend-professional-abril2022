import {PrismaClient} from "@prisma/client"

const client = new PrismaClient()

async function getUserByIdProvider(idProvider){
    const user = await client.user.findFirst({
        where:{
            idProviders:{
                has:idProvider
            }
        }
    })

    return user
}

async function createUser(data,idProvider,provider){
    data.providers = [provider]
    data.idProviders = [idProvider]
    const user = await client.user.create({
        data
    })
    console.log(user)
    return user
} 


export {
    getUserByIdProvider,
    createUser
}