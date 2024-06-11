import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'

const Show = () => {
    
  const [products, setProducts] = useState([])
  const api="/products";

  const getProducts=()=>{
    axios
    .get(api)
    .then((products)=>{
      // console.log(products)
      setProducts(products.data)
  })
    .catch(err=>console.log(err));
  }

  useEffect(() => {
    
    getProducts()

  }, [])
  

  return (
    <>
    <button onClick={getProducts} className='rounded px-5 py-2 bg-red-300 mb-2'>Call Product API</button>
    <hr />
    <ul>
        {products.length>0?(products.map((p)=>(
          <li key={p.id} className='p-5 bg-red-200 rounded mb-2'>
            {p.title}
          </li>
          ))
          ):(
            <h1>Loading...</h1>
          )}
    </ul>
    </>
  )
}

export default Show