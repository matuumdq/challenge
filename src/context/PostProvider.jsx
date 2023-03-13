import axios from "axios";
import { createContext, useState } from "react";

const PostContext = createContext()

const PostProvider = ({children}) => {

    const [post, setPost] = useState([])
    const [liked, setLiked] = useState(false)
    const [postLiked, setPostLiked] = useState([])

    const newsConsult = async(value) => {
        try {
            if(value==='') return
    
            const url = `https://hn.algolia.com/api/v1/search_by_date?query=${value}&page=1`
            
            const { data } = await axios(url)
            setPost(data.hits)
        
        } catch (error) {
            console.log(error.message)
        }
    }

    const dateFormat = date => {
        const newDate = new Date(date).getTime()
        const dateTot = Date.now()
        return(Math.abs((dateTot - newDate) / 36e5).toFixed(0))
    }

    const likedPost = (id) => {
        if(postLiked.includes(id)){
            setPostLiked(postLiked.filter(item => item !== id))
            return
        } else {
            setPostLiked([...postLiked, id])
        }
    }
    
    return(
        <PostContext.Provider
            value={{
                newsConsult,
                post,
                setPost,
                dateFormat,
                liked,
                setLiked,
                likedPost,
                postLiked
			}}
        >
            {children}
        </PostContext.Provider>
    )

}

export {
    PostProvider
}
export default PostContext