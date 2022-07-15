import {PrismaClient} from "@prisma/client"

const client = new PrismaClient()

export async function createHome(data){
    const {homeDetails,locationDetails} = data

    const home = await client.home.create({
        data:{
            ...homeDetails,
            location:{
                create:{
                    ...locationDetails
                }
            }
        },
        include:{
            location:true
        }
    })

    return home

}

export async function getAll(filter){
    const homes = await client.home.findMany({
        where:filter,
        include:{
            location:true
        }
    })

    return homes
}



export async function getOne(id){
    const home = await client.home.findUnique({
        where:{
            id
        },
        include:{
            location:true
        }
    })

    return home
}

export async function deleteOne(id){
    const home = await client.home.delete({
        where:{
            id
        }
    })

    return home
}