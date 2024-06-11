import React,{ useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

const App = () => {
  const data=[
    {image:"https://images.unsplash.com/photo-1532767153582-b1a0e5145009?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlnaHR8ZW58MHx8MHx8fDA%3D",name:"Night Changes",artist:"One Direction",added:false},
    {image:"https://images.unsplash.com/photo-1527628173875-3c7bfd28ad78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG92ZXxlbnwwfHwwfHx8MA%3D%3D",name:"I wanna be yours",artist:"Unknown",added:false},
    {image:"https://images.unsplash.com/photo-1548778052-311f4bc2b502?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGF5bG9yJTIwc3dpZnR8ZW58MHx8MHx8fDA%3D",name:"Love Story",artist:"Taylor Swift",added:false},
    {image:"https://images.unsplash.com/photo-1548778052-311f4bc2b502?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGF5bG9yJTIwc3dpZnR8ZW58MHx8MHx8fDA%3D",name:"Paper rings",artist:"Taylor Swift",added:false},
  ]
  const [songData,setSongData]=useState(data)
  const handleClick=(index)=>{
    setSongData((prev)=>{
      return prev.map((item,itemindex)=>{
        if(itemindex===index){
          return {...item, added: !item.added}
        }
        return item;
      })
    })
  }
  return (
    <>
    <div className='w-full h-screen bg-zinc-300 '>
    <Navbar data={songData}/>
    <div className='px-20 flex gap-10 mt-10 flex-wrap'>
      {songData.map((obj,index)=>(
        <Card key={index} data={obj} handleClick={handleClick} index={index}/>))}
    </div>
    
    </div>
    </>
  )
}

export default App