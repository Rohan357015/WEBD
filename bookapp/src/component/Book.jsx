import React from 'react'
import './Book.css'
import { useState } from 'react'

const Book = ({ title, price }) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
  return (
    <>
    <div className='box'>

       <img src="https://marketplace.canva.com/EAFpzM5bvfU/2/0/1236w/canva-blue-and-yellow-illustrative-math-notebook-cover-VcHnH1J3slU.jpg" alt="" width={150} height={100}/>
       <p className='info'>{title}</p>
       <p className='info'>{price}</p>
       <button onClick={increment}>+</button>
         <span className='info'>{count}</span>
       <button onClick={decrement}>-</button>

    </div>
    </>
  )
}

export default Book
