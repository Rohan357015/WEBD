import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count ,setcount ] = useState(0);
    function increase (){
        setcount(count+1);
    }
     function decrese (){
        setcount(count-1);
    }
    
    
  return (
    <div className='box'>
      <h1>Count App</h1>

      
      <button onClick={increase}>+</button>
      <span>{count}</span>
      <button onClick={decrese }>-</button>
    </div>
  )
}

export default Count
