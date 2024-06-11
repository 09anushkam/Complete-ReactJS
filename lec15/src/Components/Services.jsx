import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'

const Services = () => {
  const [first, setfirst] = useState("this is normal data")
  const [second, setSecond] = useState("this is very large data")
  
  const getUsers=()=>{
    const api="/users";
    axios
    .get(api)
    .then((users)=>{
      console.log(users)
  })
    .catch(err=>console.log(err));
  }

    // useEffect(callback,[])
    useEffect(() => {
      getUsers()
      console.log("Service component is created!")
    
      return () => {
        console.log("Service component is deleted!")
      }
    }, [second])
    
    
  return (
    <div>
      <h1>{first}</h1>
      <button onClick={()=>setfirst("Normal data has been changed")} className='mb-10 bg-red-200 p-2'>Change Normal Data</button>
      <h1>{second}</h1>
      <button onClick={()=>setSecond("Large data has been changed")} className='mb-10 bg-blue-200 p-2'>Change Large Data</button>
    </div>
  )
}

export default Services