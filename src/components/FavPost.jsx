import usePost from "../hooks/usePost"
import Post from "./Post"


const FavPost = () => {

    const { onFav } = usePost()
    
  return (
    <div >
        { onFav.length 
            ?   <div className='grid lg:grid-cols-2 w-full gap-4 my-16'>
                    {onFav.map((item) => (
                    <Post 
                        key={item[0].objectID}
                        item={item[0]}
                    />
                    ))}
                </div>
            : <p className="text-xl w-full flex justify-center my-16">Go fav some post to see Here!</p>
        }
    </div>
  )
}

export default FavPost