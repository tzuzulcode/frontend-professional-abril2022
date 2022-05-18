import React from 'react'
import axios from 'axios'

export default function Create() {
    const saveProduct = (event) =>{
        event.preventDefault()
        axios.post("/api/products/create",{
            name:event.target.name.value,
            default_price_data:{
                unit_amount:Number.parseInt(event.target.price.value),
                currency:"USD"
            },
            description:event.target.description.value,
            images:[event.target.image.value]
        })
        .then(result=>{
            console.log(result.data)
        })
        .catch(error=>console.log(error))
    }
  return (
    <div>
        <form onSubmit={saveProduct}>
            <input name='name' type="text" placeholder='Name...'/>
            <input name='description' type="text" placeholder='Description...'/>
            <input name='price' type="text" placeholder='Price...'/>
            <input name='image' type="text" placeholder='Image...'/>
            <button>Crear</button>
        </form>
    </div>
  )
}
