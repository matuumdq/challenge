import axios from "axios";
import { createContext, useState } from "react";

const PostContext = createContext()

const PostProvider = ({children}) => {

    const [post, setPost] = useState([])

    const newsConsult = async(value) => {
        try {
            if(value==='') return
    
            const url = `https://hn.algolia.com/api/v1/search_by_date?query=${value}&page=5`
            
            const { data } = await axios(url)
            setPost(data.hits)
        
        } catch (error) {
            console.log(error.message)
        }
    }

    const dateFormat = date => {
        const newDate = new Date(date)
        console.log(newDate)
    }

    return(
        <PostContext.Provider
            value={{
                newsConsult,
                post,
                setPost,
                dateFormat
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