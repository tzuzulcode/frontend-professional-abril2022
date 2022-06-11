import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { resolveFriendshipRequest, sendFriendsRequest } from '../features/users'

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
  const {people,receivedRequests,sendedRequests} = useSelector(state=>state.users)
  const dispatch = useDispatch()

  const sendFriendshipRequest = (idFriend) => {
    dispatch(sendFriendsRequest({
      idFriend
    }))
  }

  const respondFriendshipRequest = (idFriend,accepted)=>{
    dispatch(resolveFriendshipRequest({
        idFriend,
        accepted
    }))
  }
  return (
    <div>
        <section>
            <h2>Personas cercanas:</h2>
            {people.map(user=>(
                <article key={user.id}>
                    <p>{user.name}</p>
                    <img src={user.profilePic} alt={user.name}/>
                    <button onClick={()=>{sendFriendshipRequest(user.id)}}>Enviar solicitud</button>

                </article>
            ))}
        </section>
        <section>
            <h2>Solicitudes recibidas:</h2>
            {receivedRequests.map(user=>(
                <article key={user.id}>
                    <p>{user.name}</p>
                    <img src={user.profilePic} alt={user.name}/>
                    <button 
                        onClick={()=>{respondFriendshipRequest(user.id,true)}}
                    >
                        Aceptar
                    </button>
                    <button 
                        onClick={()=>{respondFriendshipRequest(user.id,false)}}
                    >
                        Rechazar
                    </button>

                </article>
            ))}
        </section>
        <section>
            <h2>Solicitudes enviadas:</h2>
            {sendedRequests.map(user=>(
                <article key={user.id}>
                    <p>{user.name}</p>
                    <img src={user.profilePic} alt={user.name}/>
                </article>
            ))}
        </section>
    </div>
  )
}
