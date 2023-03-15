
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
  )
}

export default Selector