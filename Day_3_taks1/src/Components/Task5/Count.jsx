import React, { useState } from 'react'

const Count = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
      
    <button onClick={()=>setCount(count+1)} className='bg-red-400 font-bold m-4 p-2'>
       the counter is :   {count}
    </button>
    </div>
  )
}

export default Count
