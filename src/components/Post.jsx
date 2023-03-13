import { useState } from 'react'
import {AiFillHeart, AiOutlineHeart, AiOutlineClockCircle} from 'react-icons/ai'
import usePost from '../hooks/usePost'

const Post = ({item}) => {
    const [liked, setLiked] = useState(false)
    const { dateFormat } = usePost()
    const { created_at, author, story_title, stroy_url } = item
    if ( ([created_at, author, story_title, stroy_url]).includes('')) return

    console.log(created_at)

  return (
    <div className='border-2 rounded-lg mx-8'>
        <div className='flex justify-between  items-center my-5 mx-7'>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-3'>
                    <AiOutlineClockCircle size={20}/>
                    <p>{dateFormat(created_at)} by {author}</p>
                </div>
                <p className='font-medium text-slate-600 text-lg'>
                    {story_title}
                </p>
            </div>
            
            <button onClick={()=> setLiked(!liked)}>
                {liked ? <AiFillHeart size={36} color={'red'} /> : <AiOutlineHeart size={36} color={'red'}/> }
            </button>
            
        </div>
    </div>
  )
}

export default Post