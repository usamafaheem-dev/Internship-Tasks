import React from "react";
import Sidebar from "./Sidebar";
import { LevelContext } from "./Context";

const Header = () => {
  const user = { name: "Usama", Address: "Mianwlali" };
  return (
    <div>
      {/* <LevelContext value={user}> */}
        <Sidebar />
      {/* </LevelContext> */}
    </div>
  );
};

export default Header;
