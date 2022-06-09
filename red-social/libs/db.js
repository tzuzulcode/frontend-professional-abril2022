import {PrismaClient} from '@prisma/client'
const client = new PrismaClient()

let prisma

// singleton
if(process.env.NODE_ENV == "production"){
    prisma = new PrismaClient()
}else{
    if(!globalThis.prisma){
        globalThis.prisma = new PrismaClient()
    }

    prisma = globalThis.prisma
}

export default prisma