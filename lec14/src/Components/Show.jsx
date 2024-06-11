import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Show = () => {
    
  const [products, setProducts] = useState([])
  const api="https://fakestoreapi.com/products";

  const getProducts=()=>{
    axios
    .get(api)
    .then((products)=>{
      // console.log(products)
      setProducts(products.data)
  })
    .catch(err=>console.log(err));
  }

//   const addProducts=()=>{
//     axios
//     .post(api,{
//       title: 'test product',
//       price: 13.5,
//       description: 'lorem ipsum set',
//       image: 'https://i.pravatar.cc',
//       category: 'electronic'
//     })
//     .then((res)=>{
//       console.log(res)
//   })
//     .catch(err=>console.log(err));
//   }

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