import React from 'react'

const Cardz = () => {

    const data=[
        {name:"Mahiya",description:"This is a hindi song by xyz singer"},
        {name:"Perfect",description:"This is a english song by ed shereen"},
    ]
    const handleClickDownload=()=>{alert("Downloading...")}

  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-4 justify-center items-center'>
        {data.map((item,index)=>(
            <div className='w-90 px-3 py-2 bg-zinc-100 rounded'>
            <h3 className='font-semibold text-cl'>{item.name}</h3>
            <p className='text-xs mt-2'>{item.description}</p>
            <button onClick={handleClickDownload} className='px-2 py-1 bg-blue-400 text-xs text-zinc-100 rounded mt-3'>Download Now</button>
        </div>
        ))}
    </div>
  )
}

export default Cardz