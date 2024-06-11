import React, { useState } from 'react'
import Card from './Components/Card'

const App = () => {
  // lec 5
  // const [score, setScore] = useState(0) // 1
  // const [val, setVal] = useState({name:"anushka",isBanned:false}) // 2
  // lec 6
  // const [val, setVal] = useState({name:"Anushka",age:19})  // 3
  // const [val, setVal] = useState([1,2,3,4,5,6]) // 4
  // const [val, setVal] = useState([1,2,3,4,5,6]) // 5
  // const [val, setVal] = useState([1,2,3,4,5,6]) // 6 
  // const [val, setVal] = useState([1,2,3,4,5,6]) // 7
  // const [val,setVal]=useState([
  //   {name:"anushka",age:19},
  //   {name:"sodangi",age:17},
  //   {name:"shaurya",age:12},
  // ]) // 8

  return (
    // // 1. score keeps on increasing...
    // <div className='p-4'>
    // <h1>{score}</h1>
    // <button onClick={()=>setScore(200)} className='px-2 py-2 text-xs bg-blue-500 text-white mt-2 rounded-full'>Change</button>
    // <button onClick={()=>setScore(prev=>prev+1)} className='px-2 py-2 text-xs bg-blue-500 text-white mt-2 rounded-full'>Change</button>
    // </div>

    // // 2. boolean value and button color change
    // <div className='p-4'>
    //   <h1>name: {val.name}</h1>
    //   <h2>banned: {val.isBanned.toString()}</h2>
    //   <button onClick={()=>setVal({...val,isBanned:!val.isBanned})} className={`px-3 py-1 ${val.isBanned?'bg-blue-600':'bg-red-600'} text-xs rounded-full text-white`}>Change</button>
    // </div>

    // // 3. can't get updated value on console.log using async await so we use useEffect hook
    // <div>
    //   <button onClick={()=>setVal({...val,gender:"male"})}>click</button>
    // </div>

    // // 4. removing last elements one by one array
    // <div className='p-5'>
    //   {val.map(item=><h1>{item}</h1>)}
    //   <button onClick={()=>setVal(()=>{
    //     return val.filter((item,index)=>index!==val.length-1)
    //   })} className='px-2 py-1 text-white rounded-full bg-blue-500'>click</button>
    // </div>

    // // 5. removing element at index 2 array
    // <div className='p-5'>
    //   {val.map(item=><h1>{item}</h1>)}
    //   <button onClick={()=>setVal(()=>{
    //     return val.filter((item,index)=>index!==2)
    //   })} className='px-2 py-1 text-white rounded-full bg-blue-500'>click</button>
    // </div>

    // // 6. removing all the even no. from array
    // <div className='p-5'>
    //   {val.map(item=><h1>{item}</h1>)}
    //   {/* <button onClick={()=>setVal(()=>val.filter((item,index)=>index%2===0))} className='px-2 py-1 text-white rounded-full bg-blue-500'>click</button> */}
    //   <button onClick={()=>setVal(()=>val.filter((item)=>item%2!==0))} className='px-2 py-1 text-white rounded-full bg-blue-500'>click</button>
    // </div>

    // // 7. adding element in array
    // <div className='p-5'>
    //   {val.map(item=><h1>{item}</h1>)}
    //   <button onClick={()=>setVal([...val,7])} className='px-2 py-1 text-white rounded-full bg-blue-500'>click</button>
    // </div>

    // // 8. updating age if name of person is shaurya
    // <div className='p-5'>
    //   {val.map((item)=>(
    //     <>
    //     <h1>{item.name}</h1>
    //     <h2>{item.age}</h2>
    //     </>
    //   ))}
    //   <button onClick={()=>setVal(()=>val.map((item)=>item.name==="shaurya"?({name:"shaurya",age:13}):item))} 
    //   className='px-2 py-1 text-white rounded-full bg-blue-500'>click</button>
    // </div>

    // lec7
    // Card
    <Card/>
  )
}

export default App