import React from 'react'
import usePost from '../hooks/usePost'
import Post from './Post'
import ClipLoader from "react-spinners/ClipLoader"

const PostContainer = () => {
    const { post, loading } = usePost()
    return (
        <>
            <div className='grid lg:grid-cols-2 w-full gap-4 ml-4'> 
            
                {post.map((item) => (
                    <Post 
                        key={item.objectID}
                        item={item}
                    />
                ))}
            </div>
            <div className='w-full my-10 flex items-center justify-center'>
                {loading && <ClipLoader />}
            </div>
        </>
    
  )
}

export default PostContainer