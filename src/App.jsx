import { useState } from "react"
import PostContainer from "./components/PostContainer"
import Selector from "./components/Selector"


function App() {
    const [favs, setFavs] = useState('all')


    return (

        <div>
            <h1 className="uppercase font-serif text-4xl p-8">Hacker News</h1>
            <div className="flex justify-center items-center">
                <button 
                    className={`${favs === 'all' && 'text-blue-400 border-blue-400'} font-semibold text-lg border-2 rounded-sm w-32`}
                    onClick={() => setFavs('all')}
                    >
                        All
                    </button>
                <button 
                    className={`${favs === 'favs' && 'text-blue-400 border-blue-400'} font-semibold text-lg border-2 rounded-sm w-32`}
                    onClick={() => setFavs('favs')}
                    >
                        My faves
                    </button>
            </div>
            <Selector />
            <PostContainer />
        </div>
    )
}

export default App
