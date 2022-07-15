import {getAll,getOne,deleteOne} from '../features/homes'

const resolvers = {
    Query:{
        homes:async (parent, args, context, info)=>{
            return await getAll(args.filter)
        },
        home:async (parent,args)=>await getOne(args.id)
    },
    Mutation:{
        deleteHome: async(parent,args,context,info)=>{
            return await deleteOne(args.id)
        }
    }
}

export default resolvers