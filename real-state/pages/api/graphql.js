import {ApolloServer} from 'apollo-server-micro'
import typeDefs from '../../graphql/schema'
import resolvers from '../../graphql/resolvers'

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
})


const server = apolloServer.start()

export default async function graphQL(req,res){
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader(
        'Access-Control-Allow-Origin',
        'https://studio.apollographql.com'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );

    if(req.method === "OPTIONS"){
        return res.end()
    }

    await server
    await apolloServer.createHandler({
        path:'/api/graphql'
    })(req,res)
}

export const config = {
    api:{
        bodyParser:false
    }
}