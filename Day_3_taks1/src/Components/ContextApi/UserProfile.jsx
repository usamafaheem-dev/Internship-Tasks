import React, { useContext } from "react";
import { LevelContext } from "./Context";

const UserProfile = () => {
  const value = useContext(LevelContext);
  return <div>
    my name is {value.name}, 
    and my city is {value.Address}
  </div>;
};

export default UserProfile;
