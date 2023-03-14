import React from 'react'
import usePost from '../hooks/usePost'
import Post from './Post'

const PostContainer = () => {
    const { post } = usePost()
  return (
    <div className='grid lg:grid-cols-2 w-full gap-4'>
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