import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

export default function friends() {
    const {users:{friends},auth:{user}} = useSelector(state=>state)
  return (
    <div>
        {friends.map(friend=>{
            return (
                <article className='flex items-center gap-3 p-3 '>
                    <img className='w-10 h-10' src={friend.profilePic} alt="" />
                    <p>{friend.name}</p>
                    <Link href={`/messages/${user.id}/${friend.id}`}>Enviar mensaje</Link>
                </article>
            )
        })}
    </div>
  )
}
