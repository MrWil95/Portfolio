import './Layout.css'
import Nav from '../Nav/Nav'

export default function Layout(props) {
  return (
    <>
      <Nav />
      <div className='layout-children'>
        {props.children}
      </div>
    </>
  )
}
