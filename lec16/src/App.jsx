import React from 'react'
import { Route,Routes,Link } from 'react-router-dom'
import Home from './Components/Home'
import User from './Components/User'
import About from './Components/About'
import UserDetail from "./Components/UserDetail"
const App = () => {

  return (
    <div className='p-1 w-1/2 m-auto'>
      <nav className='my-10 flex justify-center gap-10'>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
          <Route path="/user/:id" element={<UserDetail/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

    </div>
  )
}

export default App