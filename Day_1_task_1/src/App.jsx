import React from "react";
import Welcome from "./Components/Welcome";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import JSX_Comp from "./Components/JSX_Comp";
import Rendering_Lists from "./Components/Rendering_Lists";
import SquareRoot from "./Components/SquareRoot";

const App = () => {
  return (
    <div>
      <Welcome />
      
      
      {/* its is header componet */}
      <header>
        <Header />
      </header>

      {/* main area */}

      <JSX_Comp />
      {/* render Elemnet */}
     <Rendering_Lists/>
      {/* its is footer componet */}

      {/* passing props */}
      <SquareRoot number={10}/>

      {/* footer */}
      <footer>
        <Footer />
      </footer>

      </div>
  );
};

export default App;

// const Header = () => {
//   return (
//     <>
//       <h1>i am header</h1>
//     </>
//   );
// };

// const Footer = () => {
//   return (
//     <>
//       <h1>i am Footer</h1>
//     </>
//   );
// };

// const App = ()=>{

//   return (

//     <>
//     <Header/>
//     <Footer/>
//     </>
//   )
// }

// export default App;