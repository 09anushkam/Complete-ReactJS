// 1. use of props to pass different data in 2 same components
// import React from 'react'

// const Card = ({text,color}) => {
//   return (
//     <button className={`px-3 py-1 ${color} text-zinc-100 text-xs m-2 rounded`}>{text}</button>
//   )
// }

// export default Card

// 2. use of props to pass values of different people in different cards and to handle friends button
import React from 'react'

const Card = ({values,handleClick,index}) => {

    const {name,profession,image,friends}=values
    
  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-sky-200'>
            <img className='w-full h-full object-cover' src={image}/>
        </div>
        <div className='w-full p-3'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <h5 className='text-xs '>{profession}</h5>
            <button 
                onClick={()=>handleClick(index)} 
                className={`mt-4 px-3 py-1 text-xs text-white ${friends?"bg-green-600":"bg-blue-500"} font-semibold rounded-md`}>
                {friends?"Friends":"Add Friend"}
            </button>
        </div>
    </div>
  )
}

export default Card