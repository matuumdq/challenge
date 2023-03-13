import ReactLogo from '../assets/reacticon.png'
import AnguarLogo from '../assets/angular.png'
import VueLogo from '../assets/vue.png'
import { useState } from 'react'
import usePost from '../hooks/usePost'

const Selector = () => {
    const { setConsult, consult } = usePost()
    // <img src={ReactLogo} width={20} h={20}/>

  return (
        <label >
            <select value={consult} onChange={(e)=>setConsult(e.target.value)} className='w-56 h-10 border rounded-md my-16 mx-8'>
                <option value='' disabled className='text-lg'>Select your news</option>
                <option value="angular" className='text-lg'>Angular</option>
                <option value="reactjs" className='text-lg'>ReactJs</option>
                <option value="vuejs" className='text-lg'>VueJs</option>
            </select>
        </label>
  )
}

export default Selector