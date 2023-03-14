import axios from "axios";
import { createContext, useEffect, useState } from "react";

const PostContext = createContext()

const PostProvider = ({children}) => {

    const [post, setPost] = useState([])
    const [page, setPage] = useState(1);
    const [liked, setLiked] = useState(false)
    const [postLiked, setPostLiked] = useState(JSON.parse(localStorage.getItem('likedPost')) || [])
    const [consult, setConsult] = useState(JSON.parse(localStorage.getItem('consult')) || '')
    const [onFav, setOnFav] = useState(JSON.parse(localStorage.getItem('favPost')) || [])

    useEffect(() => {
        localStorage.setItem('consult', JSON.stringify(consult))
    }, [consult])

    useEffect(() => {
        const newsConsult = async(value) => {
            try {
                if(value==='') return
                const url = `https://hn.algolia.com/api/v1/search_by_date?query=${value}&page=${page}`
                const { data } = await axios(url)
                setPost(data.hits)
            } catch (error) {
                console.log(error.message)
            }
        }
        newsConsult(consult)
    }, [consult])

    
    useEffect(() => {
        localStorage.setItem('likedPost', JSON.stringify(postLiked))
        localStorage.setItem('favPost', JSON.stringify(onFav))
    }, [postLiked])

    const dateFormat = date => {
        const newDate = new Date(date).getTime()
        const dateTot = Date.now()
        return(Math.abs((dateTot - newDate) / 36e5).toFixed(0))
    }

    const likedPost = (item) => {
        if(postLiked.includes(item[0].objectID)){
            setPostLiked(postLiked.filter(post => post !== item[0].objectID))
            setOnFav(onFav.filter(post => post[0].objectID !== item[0].objectID ))
            return
        } else {
            setPostLiked([...postLiked, item[0].objectID])
            setOnFav([...onFav, item])
            return
        }
    }
    
    return(
        <PostContext.Provider
            value={{
                consult,
                setConsult,
                post,
                setPost,
                dateFormat,
                liked,
                setLiked,
                likedPost,
                postLiked,
                onFav
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