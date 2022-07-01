// 1. Escribir nuestro test, y hacer que falle. Sin errores de sintaxis

import { login,getUserByEmail,getUserByIdProvider } from "../features/auth";
import {PrismaClient} from "@prisma/client"

const client = new PrismaClient()

// Next Auth

describe('Auth', () => { 
    it("verify user exists",()=>{
        // Assert: Si getUserByEmail nos devuelve el string "Tzuzul", el test pasa. Sino, el test no pasa
        expect(getUserByEmail("mail@tzuzulcode.com")).toEqual("Tzuzul")
    })
    it("verify user does not exist",async ()=>{
        const user = await getUserByIdProvider("503212218206874")
        expect(user).toEqual(null)
    })
})