

// method one of passing props : - 
// const UserCard = (props) => {
//   return (
//     <div>


//         <h2>
//         My name is {props.name}.And my age is {props.age}
//         </h2>

//     </div>
//   )
// }

// export default UserCard

// Method two of passing props : - 

// const UserCard = ({name,age}) => {
//   return (
//     <div>


//         <h2>
//         My name is {name}.And my age is {age}
//         </h2>

//     </div>
//   )
// }

// export default UserCard


// Method Three of passing props : - 

const UserCard = (props) => {
      const {name,age}=props
  return (
    <div>


        <h2>
        My name is {name}.And my age is {age} . 
         <span style={{color:"grey",fontSize:"16px"}}>(Task five)</span>

        </h2>

    </div>
  )
}

export default UserCard


