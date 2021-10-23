import './App.css'
import {Route} from 'react-router-dom'
import Landing from './screens/Landing/Landing'
import Home from './screens/Home/Home'
import About from './screens/About/About'
import Work from './screens/Work/Work'
import Contact from './screens/Contact/Contact'

function App() {
  return (
    <div className='App'>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route exact path='/home'>
        <Home />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/work'>
        <Work />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
    </div>
  )
}

export default App
