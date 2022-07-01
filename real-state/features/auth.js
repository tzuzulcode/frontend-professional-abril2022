import {PrismaClient} from "@prisma/client"

const client = new PrismaClient()

function getUserByEmail(email){
    return "Tzuzul"
}
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
function login(){
    
}


export {
    getUserByEmail,
    getUserByIdProvider,
    login
}