import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='mt-10 flex justify-center gap-10'>

        {/* dynamic style inside {} open brackets and returing span tag */}
      <NavLink to="/">
        {(e)=>{
            return <span className={[
                e.isActive?"text-red-300":"",
                e.isActive?"font-bold":"",
            ].join(" ")}>Home</span>
        }}
      </NavLink>

      {/* dynamic styling using style */}
      <NavLink style={(e)=>{
        return {
            color:e.isActive?"#FCA5A5":"",
            fontWeight:e.isActive?"bold":"",
        }
      }} to="/user">User</NavLink>

      {/* dynamic styling using className */}
      <NavLink 
      className={(e)=>{
        return [
            e.isActive?"text-red-300":"",
            e.isActive?"font-bold":"",
        ].join(" ")
      }}
       to="/about">About</NavLink>
    </nav>
  )
}

export default Nav