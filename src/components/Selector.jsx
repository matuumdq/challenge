import ReactLogo from '../assets/reacticon.png'
import AnguarLogo from '../assets/angular.png'
import VueLogo from '../assets/vue.png'

const Selector = () => {

    // <img src={ReactLogo} width={20} h={20}/>
  return (
    <label >
        <select name="" id="" className='w-56 h-10 border rounded-md my-16 mx-8'>
            <option className='text-lg'>Select your news</option>
            <option value="angular" className='text-lg'>Angular</option>
            <option value="ReactJs" className='text-lg'>ReactJs</option>
            <option value="VueJs" className='text-lg'>VueJs</option>
        </select>
    </label>
  )
}

export default Selector