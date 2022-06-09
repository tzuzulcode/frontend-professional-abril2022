import React from 'react'
import {useSelector} from 'react-redux'

// export async function getServerSideProps(context){
//     const host = context.req.headers.host
//     const secure = context.req.connection.encrypted

//     const {data:users} = await axios.get(`${secure?"https":"http"}://${host}/api/users/all`)

//     return {
//         props:{
//             users
//         }
//     }
// }

export default function People() {
  const {people} = useSelector(state=>state.users)

  const sendFriendshipRequest = () =>{
    
  }
  return (
    <div>
        <section>
            {people.map(user=>(
                <article key={user.id}>
                    <p>{user.name}</p>
                    <img src={user.profilePic} alt={user.name}/>
                    <button onClick={sendFriendshipRequest}>Enviar solicitud</button>

                </article>
            ))}
        </section>
    </div>
  )
}
