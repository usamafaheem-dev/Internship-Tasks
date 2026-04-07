// import React from "react";

// const Simple = () => {
//   const user = [
//     {
//       name: "Rida Khan",
//       imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//       imageSize: "100px",
//       borderRaduis: "50%",
//       fontSize: "30px",
//     },
//     {
//       name: "Hania Khan",
//       imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//       imageSize: "100px",
//       borderRaduis: "30%",
//       fontSize: "40px",
//       color:"red"
//     },
//   ];
//   return (
//     <div>
//       {user.map((item, index) => {
//         return (
//           <>
//             <h1 key={index} style={{ fontSize: item.fontSize ,color:item.color}}>
//               {item.name}
//             </h1>
//             <img
//               src={item.imageUrl}
//               alt={"User name " + item.name}
//               style={{ width: item.imageSize, borderRadius: item.borderRaduis }}
//             />
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default Simple;
// import React, { useState } from "react";

// const Simple = () => {
//   const [isLogged, setIsLogged] = useState(true);

//   let content;
//   if (isLogged) {
//     content = "User Login";
//   } else {
//     content = "User logout";
//   }

//   return <div> {} </div>;
// };

// export default Simple;

import React from "react";

const Simple = () => {
  const number = [1, 2, 3];
  //   let sum = 0;

  const newNum = number.map((item) => {
    return item * 2;
    // return sum;
  });
  //   console.log(sum);

  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  const listItem = products.map((item) => {
    return (
      <li key={item.id} style={{ color: item.isFruit ? "red" : "green" }}>
        {item.title}
      </li>
    );
  });

  return (
    <div>
      {listItem}
      <ul>
        {newNum.map((item) => {
          return (
            <>
              <li>{item}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Simple;
