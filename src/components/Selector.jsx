
import { useState } from 'react'
import usePost from '../hooks/usePost'
import logoangular from '../assets/angular.png'
import logoreact from '../assets/react.png'
import logovuejs from '../assets/vuejs.png'
import Select from 'react-select'

const Selector = () => {
    
    const { setConsult, consult } = usePost()
    const frameWork = [
        { value: 'angular', label: 'Angular', image: logoangular },
        { value: 'react', label: 'React', image: logoreact },
        { value: 'vuejs', label: 'VueJS', image: logovuejs }
    ];

  return (
    <>
        <Select className=' w-60 h-10 my-16 ml-8 md:ml-12'
        value={frameWork.value}
        defaultValue={frameWork.find(frame=>frame.value === consult)}
        options={frameWork}
        onChange={e=> setConsult(e.value)}
        theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              text: 'red',
              primary25: '#72d4bb',
              primary: '#72bcd4',
            },
          })}
        formatOptionLabel={frame => (
            <div className="frame-option flex items-center">
            <img src={frame.image} alt="frame-image" className='h-5 w-5 mr-3' />
            <span>{frame.label}</span>
            </div>
        )}
    />
    
    </>
        // <label >
        //     <select value={consult} onChange={(e)=>setConsult(e.target.value) } className='w-56 h-10 border rounded-md my-16 mx-8'>
        //         <option value='' disabled className='text-lg'>Select your news</option>
        //         <option value="angular" className='text-lg flex'>
        //             Angular
        //         </option>
        //         <option value="reactjs" className='text-lg bg-no-repeat bg-center bg-cover flex items-center'>
        //             <div className="h-6 w-6 mr-2" style={{ backgroundImage: `url(${logo})` }}></div>
        //             React
        //         </option>
        //         <option value="vuejs" className='text-lg'>VueJs</option>
        //     </select>
        // </label>
  )
}

export default Selector