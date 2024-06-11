import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {
  const {id}=useParams();
  const navigate = useNavigate();
  const {users}=useContext(UserContext); //useContext(UserContext)
  // console.log(users[id])
  return (
    <div>
      <h1 className='text-4xl font-bold text-red-200'>{users[id].username}</h1>
      <h3 className='text-red-400'>{users[id].city}</h3>
      <button onClick={()=>navigate("/user")} className='bg-red-100 p-2 mt-5 rounded'>Go Back</button>
    </div>
  )
}

export default UserDetail