// 1. Escribir nuestro test, y hacer que falle. Sin errores de sintaxis

import { login,getUserByEmail } from "../features/auth";

// Next Auth

describe('Auth', () => { 
    it("verify user exists",()=>{
        // Assert: Si getUserByEmail nos devuelve el string "Tzuzul", el test pasa. Sino, el test no pasa
        expect(getUserByEmail("mail@tzuzulcode.com")).toEqual("Tzuzul")
    })
})