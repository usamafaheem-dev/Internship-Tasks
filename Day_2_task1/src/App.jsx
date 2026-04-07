import React from "react";
import EventHandle from "./Components/EventHandle";
import Form from "./Components/Form";
import Count from "./Components/Count";
import Parent from "./Components/Parent";
import ObjectTask from "./Components/ObjectTask";
import ObjectForm from "./Components/ObjectForm";
import Task_1 from "./Components/Task_1";
import ArrayTask from "./Components/ArrayTask";
import TasksCom from "./Components/TasksCom";
import ArrayOfObject from "./Components/ArrayOfObject";
import ButtonTasks from "./Components/ButtonTasks";

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      {/* <EventHandle/>
    <Form/>
    <Count/>
    <Parent/>

    <button onClick={()=>setCount(count+1)}>
      count : {count}
    </button>

    <ObjectTask/>

    <ObjectForm/>
      {/* <Task_1/> */}
      {/* <ArrayTask /> */}
        {/* <ObjectForm/> */}
        {/* <TasksCom/> */}
        {/* <ArrayOfObject/> */}
        <ButtonTasks/>
    </div>
  );
};

export default App;
