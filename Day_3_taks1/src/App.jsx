import React from "react";
import TaskApp from "./Components/Taks6/TaskApp";
import Section from "./Components/Task7/Section";
import Heading from "./Components/Task7/Heading";
import A from "./Components/PropsDrilling/A";
import B from "./Components/PropsDrilling/B";
import C from "./Components/PropsDrilling/C";
import { LevelContext } from "./Components/ContextApi/Context";
import Header from "./Components/ContextApi/Header";
import Sidebar from "./Components/ContextApi/Sidebar";
import UserProfile from "./Components/ContextApi/UserProfile";
import Counter from "./Components/CounterApp/Counter";

const App = () => {
 
  return (
    <div>
      {/* <LevelContext.Provider value="d ark"> */}
      {/* <A /> */}
      {/* </LevelContext.Provider> */}

    <Counter/>
        {/* <Header /> */}
    

      {/* <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section> */}

      <br />
      <br />

      {/* 
      <Section>
        <Heading level={1}>Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section>
            <Heading level={3}>sub-Heading</Heading>
            <Heading level={3}>sub-Heading</Heading>
            <Heading level={3}>sub-Heading</Heading>

            <Section>
              <Heading level={4}>sub-sub-Heading</Heading>
              <Heading level={4}>sub-sub-Heading</Heading>
              <Heading level={4}>sub-sub-Heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section> */}
    </div>
  );
};

export default App;
