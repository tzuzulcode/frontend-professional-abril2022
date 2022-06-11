import React from 'react'

export default function Card({post}) {
  return (
    <article className='p-5 bg-white my-5 shadow-md rounded-md' key={post.id}>
        <div className='flex items-center gap-3 mb-5'>
            <img className='w-10 h-10 rounded-full' src={post.author.profilePic} alt={post.author.name} />
            <h3 className=' font-medium text-3xl'>{post.author.name}</h3>
        </div>
        <p className='text-xl my-5'>{post.content}</p>
        <img className='rounded-md' src={post.image} />
    </article>
  )
}