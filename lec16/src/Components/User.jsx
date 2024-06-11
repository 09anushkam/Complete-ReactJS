import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {UserContext} from "../context/Context"

const User = () => {
    const {users,setUsers} = useContext(UserContext)

  return (
    <div>
        <h1 className='text-3xl'>User List</h1>
        <div className='mt-10 flex flex-col w-1/2'>
            {users.map(u=>(
                <Link key={u.id} className='p-3 mb-3 bg-red-100' to={`/user/${u.id}`}>
                    {u.username}
                </Link>
            ))}
            
        </div>
    </div>
  )
}

export default User