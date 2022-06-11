import React from 'react'
import { useSelector } from 'react-redux'

export default function friends() {
    const {friends} = useSelector(state=>state.users)
  return (
    <div>
        {friends.map(friend=>{
            return (
                <article>
                    <p>{friend.name}</p>
                    <img src={friend.profilePic} alt="" />
                </article>
            )
        })}
    </div>
  )
}
