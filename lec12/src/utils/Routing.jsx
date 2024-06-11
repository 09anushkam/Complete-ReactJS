import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from "../Components/Home"
import About from "../Components/About"
import User from "../Components/User"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/user" element={<User/>} />
      <Route path="/about" element={<About/>} />

    </Routes>
  )
}

export default Routing