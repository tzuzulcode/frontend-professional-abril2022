import { createHome, getAll, getOne, deleteOne } from "../features/homes";
// import {initializeDatabase} from "./config/db"

describe('Homes', () => {
    let id
    it("Should create a new home",async ()=>{
        const data = {
            homeDetails:{
                title:"Casa familiar grande con buena ubicación",
                images:[
                    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                    "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                ],
                price:895375.24,
                description:"Descripción de la casa",
                type: "HOME"
            },
            locationDetails:{
                country:"México",
                state:"Quintana Roo",
                city:"Cancún",
                street:"Calle de prueba",
                number:703,
                zipCode: 20202
            }
        }
        const home = await createHome(data)
        id = home.id
        expect(home).toBeDefined()
        expect(home).not.toBeNull()
        expect(home).toMatchObject({
            title: 'Casa familiar grande con buena ubicación',
            images: [
              'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            ],
            price: 895375.24,
            description: 'Descripción de la casa',
            type: 'HOME',
            location: {
              country: 'México',
              state: 'Quintana Roo',
              city: 'Cancún',
              street: 'Calle de prueba',
              number: 703,
              zipCode: 20202,
            }
          })
    })
    it("Should get one home",async ()=>{
        const home = await getOne(id)
        expect(home).toBeDefined()
        expect(home).toMatchObject({
          id,
          title: 'Casa familiar grande con buena ubicación',
          images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
          ],
          price: 895375.24,
          description: 'Descripción de la casa',
          type: 'HOME',
          location: {
            country: 'México',
            state: 'Quintana Roo',
            city: 'Cancún',
            street: 'Calle de prueba',
            number: 703,
            zipCode: 20202,
          }
      })
    })
    it("Should get all homes",async ()=>{
        const homes = await getAll()

        expect(homes).toBeDefined()
        expect(homes.length).not.toBe(0)
        expect(homes[0]).toMatchObject({
            title: 'Casa familiar grande con buena ubicación',
            images: [
              'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            ],
            price: 895375.24,
            description: 'Descripción de la casa',
            type: 'HOME',
            location: {
              country: 'México',
              state: 'Quintana Roo',
              city: 'Cancún',
              street: 'Calle de prueba',
              number: 703,
              zipCode: 20202,
            }
        })
    })

    it("Should get all homes by filter",async ()=>{
        const homes = await getAll({
          price:{
            gt:100000,
            lt:500000
          }
        })

        console.log(homes)

        expect(homes).toBeDefined()
        expect(homes.length).toBe(0)
    })

    it("Should delete a home",async()=>{
        const home = await deleteOne(id)

        expect(home).toBeDefined()
        expect(home).toMatchObject({
          id,
          title: 'Casa familiar grande con buena ubicación',
          images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
          ],
          price: 895375.24,
          description: 'Descripción de la casa',
          type: 'HOME'
      })
    })
})