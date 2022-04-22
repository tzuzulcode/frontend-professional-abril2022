export default function getProducts(req,res){
    return res.json([
        {
            id:"abc1",
            name:"Producto 1",
            description:"Descripción del producto"
        },
        {
            id:"abc2",
            name:"Producto 2",
            description:"Descripción del producto"
        },
        {
            id:"abc3",
            name:"Producto 3",
            description:"Descripción del producto"
        }
    ])
}