import './FullStack.css'
import { Link } from 'react-router-dom'

export default function FullStack() {
  return (
    <>
      <div className='Tab'>
        <Link to='./work/engineer'>
          Software Engineer
        </Link>
      </div>
      <div className='Paper'></div>
      <div className='FullStackContainer'></div>
    </>
  )
}
