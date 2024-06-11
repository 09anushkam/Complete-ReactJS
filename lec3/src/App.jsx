import React from 'react'
import Card from './Components/Card'

const App = () => {

  // const data=["anushka","anu","am"]

  return (
    <>

    <Card/>

    {/* USE OF MAP FOR RENDERIG ALL VALUES OF ARRAY */}

    {/* {data.map((value,index)=><h1 key={index}>{value}</h1>)} */}

      {/* <div>
        {data.map((elem,index)=>(
          <div key={index} className="px-3 py-4 bg-zinc-100 rounded-md w-fit">
            {elem}
          </div>
        ))}
      </div> */}
      
    </>
  )
}

export default App