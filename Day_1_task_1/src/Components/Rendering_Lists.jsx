import React from 'react'

const Rendering_Lists = () => {
    const names= ["Ali", "Ahmed", "Sara"]
  return (
    <div>
  


   <h2>List Render . <span style={{color:"grey",fontSize:"16px"}}>(Task Seven)</span></h2>
        {/* render list */}
        <ul>

      {
        names.map((list,index)=>{
            return (
                <li key={index}>{list}</li>
            )
        })
      }
        </ul>
    </div>
  )
}

export default Rendering_Lists
