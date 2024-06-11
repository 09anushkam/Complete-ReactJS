import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='mt-10 flex justify-center gap-10'>
      {/* Dynamic style inside {} with a span tag */}
      <NavLink to="/">
        {(e) => {
          return (
            <span className={[
              e.isActive ? "text-red-300" : "",
              e.isActive ? "font-bold" : ""
            ].join(" ").trim()}>Home</span>
          )
        }}
      </NavLink>

      {/* Dynamic styling using style */}
      <NavLink style={(e) => {
        return {
          color: e.isActive ? "#FCA5A5" : undefined,
          fontWeight: e.isActive ? "bold" : undefined,
        }
      }} to="/user">User</NavLink>

      {/* Dynamic styling using className */}
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-300" : "",
            e.isActive ? "font-bold" : ""
          ].join(" ").trim()
        }}
        to="/about">About</NavLink>
    </nav>
  )
}

export default Nav
