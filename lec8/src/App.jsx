import React, { useState } from 'react'
import Card from './Components/Card'

const App = () => {
  const data=[
        {name:"Adriana",profession:"Painter",image:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",friends:false},
        {name:"Sofi",profession:"Artist",image:"https://images.unsplash.com/photo-1557053910-d9eadeed1c58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHBvcnRyYWl0fGVufDB8fDB8fHww",friends:false},
        {name:"Charles",profession:"Editor",image:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0fGVufDB8fDB8fHww",friends:false},
        {name:" Christopher",profession:"Coder",image:"https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",friends:false},        
    ] // 2

    const [realData,setRealData]=useState(data);

    const handleFriendsButton=(cardIndex)=>{
      setRealData((previous)=>{
        return previous.map((item,index)=>{
          if(index===cardIndex) return {...item,friends: !item.friends};
          return item;
        })
      })
    }

  return (
    <>
      {/* 1 */}
      {/* <Card text="Know More" color="bg-blue-600"/>
      <Card text="Download" color="bg-red-600"/> */}

      {/* 2 */}
      <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
        {realData.map((item,index)=>(
          <Card 
          key={index}
          index={index} 
          handleClick={handleFriendsButton} 
          values={item}
          />
        ))}
      </div>
    </>
  )
}

export default App