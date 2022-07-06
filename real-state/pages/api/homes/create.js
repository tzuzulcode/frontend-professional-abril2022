import { createHome } from "../../../features/homes";
export default async function postHome(req,res){
    if(req.method==="POST"){
        const home = await createHome(req.body)

        return res.json(home)
    }

    return res.status(405).json({
        message:"Method not allowed"
    })
}