// method 1 - useRef

// import React, { useRef } from 'react'

// const App = () => {
//   const name=useRef(null)
//   const age=useRef(null)
//   const email=useRef(null)

//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     console.log(name.current.value,age.current.value,email.current.value)
//   }
//   return (
//     <div ref={elem} className='p-4'>
//       <form action="" onSubmit={handleSubmit}>
//         <input className='border-2' ref={name} type="text" placeholder='name' />
//         <input className='border-2' ref={age} type="text" placeholder='age' />
//         <input className='border-2' ref={email} type="text" placeholder='email' />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App


// method 2 - controlled components

// import React, { useState } from 'react'

// const App = () => {
//   const [val, setVal] = useState({name:"",email:""})
//   const handleSubmit=(e)=>{
//     e.preventDefault()
//   }
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <input onChange={(e)=>setVal({...val,name:e.target.value})} type="text" placeholder='name' />
//         <input onChange={(e)=>setVal({...val,email:e.target.value})} type="email" placeholder='email' />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App

// method 3 - react hook forms

// import React from 'react'
// import {useForm} from 'react-hook-form'

// const App = () => {
//   const {register,handleSubmit}=useForm()

//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit(data=>console.log(data))}>
//         <input {...register('name')} type="text" placeholder='name' />
//         <input {...register('email')} type="email" placeholder='email' />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App