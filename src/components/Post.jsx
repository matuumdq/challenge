import { useState } from 'react'
import {AiFillHeart, AiOutlineHeart, AiOutlineClockCircle} from 'react-icons/ai'
import usePost from '../hooks/usePost'

const Post = ({item}) => {
    const { dateFormat, liked, setLiked, likedPost, postLiked, favedPost } = usePost()
    const { created_at, author, story_title, story_url, objectID } = item
    const test = [created_at, author, story_title, story_url]
    const test2 = [{created_at, author, story_title, story_url, objectID}]
    const [idLiked, setIdLiked] = useState(false)
    
    if(test.includes(undefined||null)) return

    const handleClick = (e) => {
        e.preventDefault()
    } 

  return (   
    <a href={story_url} target={'_blank'}>
        <div className='min-h-[100px] lg:min-h-[128px] overflow-y-hidden border-2 rounded-lg mx-4 md:mx-8 my-2 md:my-4 hover:opacity-40 hover:scale-105 ease-in-out duration-200'>
            <div className='flex justify-between  items-center my-5 mx-7'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-3'>
                        <AiOutlineClockCircle size={20}/>
                            <p>
                                {`Created ${dateFormat(created_at)} hours ago by ${author}`}
                            </p> 
                    </div>
                        <p className='font-medium text-slate-600 text-lg'>
                            {story_title}
                        </p>
                    
                </div>
                <button className='cursor-cell' onClick={(e)=> { 
                    likedPost(test2)
                    handleClick(e) }
                }>
                    {postLiked.includes(objectID) ? <AiFillHeart size={36} color={'red'} /> : <AiOutlineHeart size={36} color={'red'}/> }
                </button>
            </div>
        </div> 
    </a>
  )
}

export default Post