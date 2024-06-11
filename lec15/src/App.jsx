import React from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import Show from './Components/Show'
import Home from './Components/Home'
import Services from './Components/Services'

const App = () => {

  return (
    <div className='pt-[5%] pl-[5%]'>
      <nav className='flex justify-center gap-10'>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/show">Show</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/show' element={<Show/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>
    </div>
  )
}

export default App