import React from 'react'
import Card from './Card'

export default function Posts({posts}) {
  return (
    <section className=' w-1/2 mx-auto'>
        {posts.map(post=>(
          <Card post={post} key={post.id}/>
        ))}
    </section>
  )
}
