import { useState } from 'react'
import {AiFillHeart, AiOutlineHeart, AiOutlineClockCircle} from 'react-icons/ai'
import usePost from '../hooks/usePost'

const Post = ({item}) => {
    
    const { dateFormat, liked, setLiked, likedPost, postLiked } = usePost()
    const { created_at, author, story_title, story_url, objectID } = item
    const test = [created_at, author, story_title, story_url]
    const [idLiked, setIdLiked] = useState(false)
    
    if(test.includes(undefined||null)) return
    // if(postLiked.includes(objectID)){
    //     setIdLiked(!idLiked)
    // }

  return (   
        <div className='border-2 rounded-lg mx-8 my-4 hover:opacity-70 hover:scale-110 ease-in-out duration-200'>
            <div className='flex justify-between  items-center my-5 mx-7'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-3 cursor-default'>
                        <AiOutlineClockCircle size={20}/>
                            <p>
                                {`Created ${dateFormat(created_at)} hours ago by ${author}`}
                            </p> 
                    </div>
                    <a href={story_url} target={'_blank'}>
                        <p className='font-medium text-slate-600 text-lg'>
                            {story_title}
                        </p>
                    </a>
                </div>
                <button onClick={()=> likedPost(objectID)}>
                    {postLiked.includes(objectID) ? <AiFillHeart size={36} color={'red'} /> : <AiOutlineHeart size={36} color={'red'}/> }
                </button>
            </div>
        </div> 
  )
}

export default Post