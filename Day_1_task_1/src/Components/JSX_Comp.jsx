import React from "react";
import UserCard from "./UserCard";

const JSX_Comp = () => {
  let name = "Ali";
  return (
    <>
      <main>
        {/* tasks four */}
        <section>
          <h1>
            This is jsx Component{" "}
            <span style={{ color: "grey", fontSize: "16px" }}>
              (Task Four)
            </span>{" "}
          </h1>
          <p>
            This is simple jsx Component.In which we learn how we create the jsx
            componet and return the differnt componets. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Porro, accusamus hic beatae
            provident velit quas iure molestias dolorem consequuntur possimus!
          </p>

          <h2> My name is "{name} ". </h2>
          <button
            style={{
              color: "white",
              backgroundColor: "Black",
              padding: "10px 20px",
              borderRadius: "7px",
              fontSize: "20px",
            }}
          >
            Click Me
          </button>
        </section>

        {/* tasks 5  */}
        <section>
         <UserCard name={"Ali"} age={22} />
        </section>

        <section>
          
        </section>
        
        
      
    

      </main>
    </>
  );
};

export default JSX_Comp;
