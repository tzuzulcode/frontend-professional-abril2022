import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId:process.env.FACEBOOK_APP_ID,
            clientSecret:process.env.FACEBOOK_APP_SECRET
        })
    ],
    callbacks:{
        async jwt({token,account}){
            console.log("TOKEN:",token)
            console.log("ACCOUNT:",account)
            // Account solo esta disponible cuando iniciamos sesion
            // Registrar el usuario en la BD
            return token
        },
        async session({session,user,token}){
            session.user.id = token.sub
            return session
        }
    }
})