// 1. Escribir nuestro test, y hacer que falle. Sin errores de sintaxis

import { getUserByIdProvider,createUser } from "../features/auth";
import {initializeDatabase} from "./config/db"

beforeAll(()=>{
    return initializeDatabase()
})

// afterAll(()=>{
//     return initializeDatabase()
// })

// Next Auth

describe('Auth', () => { 
    // it("verify user exists",()=>{
    //     // Assert: Si getUserByEmail nos devuelve el string "Tzuzul", el test pasa. Sino, el test no pasa
    //     expect(getUserByEmail("mail@tzuzulcode.com")).toEqual("Tzuzul")
    // })
    it("verify user does not exist",async ()=>{
        const user = await getUserByIdProvider("503212218206874")
        expect(user).toEqual(null)
    })
    it("should create user",async ()=>{
        let data = {
            name:"Tzuzul",
            email:"mail@tzuzulcode.com",
            picture:"http://fotos.com"
        }
        const user = await createUser(data,"abc1234","google")

        // Asserts
        // expect(user).not.toBeUndefined()
        expect(user).toBeDefined()
        expect(user).not.toBeNull()
        expect(user).toMatchObject({
            providers: [ 'google' ],
            idProviders: [ 'abc1234' ],
            email: 'mail@tzuzulcode.com',
            name: 'Tzuzul',
            picture: 'http://fotos.com',
            role: 'NORMAL'
        })
    })
})