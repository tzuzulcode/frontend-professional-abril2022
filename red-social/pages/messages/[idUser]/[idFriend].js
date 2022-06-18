import React, { useEffect, useRef, useState } from 'react'
import {useRouter} from 'next/router'
import { realTimeDB } from '../../../config/firebase'
import { child, get, ref, push, onValue } from 'firebase/database'
import {useSelector} from 'react-redux'


export default function Messages() {

  const [messsages,setMessages] = useState({})
  const messageInput = useRef()

  const router = useRouter()
  const {idUser,idFriend} = router.query

  useEffect(()=>{
    if(idUser && idFriend){
      // Obtener datos una vez
      // get(child(dbRef,`${idUser}/${idFriend}`))
      // .then(snapshot=>{
      //   if(snapshot.exists()){
      //     setMessages(snapshot.val())
      //     console.log(Object.entries(snapshot.val()))
      //   }else{
      //     console.log("No existen mensajes")
      //   }
      // })

      const chatRef = ref(realTimeDB,`${idUser}/${idFriend}`)

      onValue(chatRef,snapshot=>{
        if(snapshot.exists()){
          setMessages(snapshot.val())
        }else{
          console.log("No existen mensajes")
        }
      })
    }
  },[idUser,idFriend])

  const sendMessage = ()=>{
    const message = messageInput.current.value
    const dbRef = ref(realTimeDB)
    push(child(dbRef,`${idUser}/${idFriend}`),{
      content:message,
      sender:idUser,
      date:new Date().toISOString()
    })
    push(child(dbRef,`${idFriend}/${idUser}`),{
      content:message,
      sender:idUser,
      date:new Date().toISOString()
    })
    messageInput.current.value = ""
  }
  
  return (
    <div className='pb-10'>
        {console.log(idUser,idFriend)}
        <h1 className='text-3xl font-bold w-1/2 mx-auto my-5'>Messages</h1>
        <section className='flex flex-col w-1/2 mx-auto bg-white p-5 rounded-md'>
          {Object.entries(messsages).map(([id,data])=>(
            data.sender==idUser?
              <div key={id} className='bg-blue-100 rounded-md p-2 gap-2 items-center w-max ml-auto'>
                  <p>{data.content}</p>
              </div>:
              <div className='bg-green-100 p-2 rounded-md w-max' key={id}>
                <p>{data.content}</p>
              </div>
          ))}
          <div className='flex bg-gray-100 p-2 mt-10'>
            <input ref={messageInput} className="w-full outline-none bg-transparent" placeholder='Write message...'></input>
            <button onClick={sendMessage}>Enviar</button>
          </div>
        </section>
    </div>
  )
}
