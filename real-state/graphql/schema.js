// const {readFileSync} = require("fs")

// const typeDefs = readFileSync(require.resolve("./schema.graphql")).toString("utf-8")

// export default typeDefs
import {gql} from "apollo-server"

const typeDefs = gql`
    enum HomeType{
    HOME
    DEPARTMENT
    }

    type Home{
        id: String
        title: String
        images: [String]
        price: Float
        description: String
        type: HomeType
        location: Location
    }

    type Location{
        id: String
        country: String
        state: String
        city: String
        street: String
        number: Int
        zipCode: Int
    }


    type Query{
        homes(filter:Filter): [Home]
        home(id:String!): Home
    }

    input Filter{
        price: NumberFilter
    }

    input NumberFilter{
        gt: Float
        gte: Float
        lt: Float
        lte: Float
    }
`

export default typeDefs