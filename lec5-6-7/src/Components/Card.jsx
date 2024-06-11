import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const Card = () => {
    const [val, setVal] = useState(false)
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
        <div className='relative w-200 h-60 bg-zinc-500 rounded-md flex overflow-hidden'>
            <img className={`shrink-0 transition-transform duration-700 ease-in-out w-full h-full ${val===true?"-translate-x-[100%]":"-translate-x-[0%]"} object-cover`} src="https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNjZW5lcnl8ZW58MHx8MHx8fDA%3D" alt="" />
            <img className={`shrink-0 transition-transform duration-700 ease-in-out w-full h-full ${val===true?"-translate-x-[100%]":"-translate-x-[0%]"} object-cover`} src="https://plus.unsplash.com/premium_photo-1677347335105-1bd16607a25e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjZW5lcnl8ZW58MHx8MHx8fDA%3D" alt="" />
            <button>
                <span onClick={()=>setVal(()=>!val)} className='w-8 h-8 flex items-center justify-center rounded-full bg-[#dadada8b] absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    {val?<FaArrowLeftLong size={".7em"}/>:<FaArrowRightLong size={".7em"}/>}
                </span>
            </button>
        </div>
    </div>
  )
}

export default Card