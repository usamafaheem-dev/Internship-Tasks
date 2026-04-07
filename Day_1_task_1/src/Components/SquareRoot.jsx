import React from 'react'

const SquareRoot = ({number}) => {
    const square = number * number;
  return (
    <div>
      <h1>Square the Number . <span style={{color:"grey", fontSize:"16px"}}> (Task Eight)</span></h1>
      <li>{square}</li>
    </div>
  )
}

export default SquareRoot
