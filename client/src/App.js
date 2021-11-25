import './App.css'
import { Route } from 'react-router-dom'
import Landing from './screens/Landing/Landing'
import Home from './screens/Home/Home'
import About from './screens/About/About'
import Work from './screens/Work/Work'
import Contact from './screens/Contact/Contact'

export default function App() {
  return (
    <div className='Container'>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route exact path='/home'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/work'>
        <Work />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
    </div>
  )
}