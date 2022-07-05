import {PrismaClient} from "@prisma/client"

const client = new PrismaClient()

export async function initializeDatabase(){
    return Promise.all([
        client.user.deleteMany(),
        client.location.deleteMany(),
        client.home.deleteMany()
    ])
}