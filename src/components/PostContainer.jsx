import React from 'react'
import Post from './Post'

const PostContainer = () => {
  return (
    <div className='grid md:grid-cols-2 grid-rows-4 w-full gap-6'>
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default PostContainer