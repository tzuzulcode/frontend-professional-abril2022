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

export async function getAll(){
    const homes = await client.home.findMany({
        include:{
            location:true
        }
    })

    return homes
}