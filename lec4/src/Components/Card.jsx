import React from 'react'

const Card = () => {
  const data=[
    {image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',name:"Amazon Basics",description:"This is a Earphones",instock:true},
    {image:'https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',name:"Camera",description:"This is a camera",instock:false},
    {image:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',name:"Watch",description:"This is a watch",instock:true},
  ];

  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
        {data.map((elem,index)=>(
          <div className='w-52 bg-zinc-100  rounded-md overflow-hidden' key={index}>
            <div className='w-full h-32 bg-zinc-300'>
                <img src={elem.image} className='w-full h-full object-cover' alt="" />
            </div>
            <div className='w-full px-3 py-4'>
                <h2 className='font-semibold'>{elem.name}</h2>
                <p className='text-xs mt-5'>{elem.description} </p>
                <button className={`px-4 py-1 ${elem.instock?'bg-blue-600':'bg-red-600'} rounded text-xs text-zinc-100 mt-3`}>
                  {elem.instock? "In Stock" : "Out of Stock" }
                </button>
            </div>
        </div>
        ))}
    </div>
  )
}
export default Card