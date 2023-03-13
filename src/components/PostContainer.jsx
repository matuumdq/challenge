import React from 'react'
import usePost from '../hooks/usePost'
import Post from './Post'

const PostContainer = () => {
    const { post } = usePost()
  return (
    <div className='grid md:grid-cols-2 grid-rows-4 w-full gap-6'>
        {post.map((item) => (
            <Post 
                key={item.objectID}
                item={item}
            />
        ))}
    </div>
  )
}

export default PostContainer