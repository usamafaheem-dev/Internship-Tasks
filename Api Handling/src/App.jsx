// import React, { lazy, Suspense, useState } from "react";
// import WeatherApi from "./Apis/WeatherApi";
// import SecondWeather from './Apis/SecondWeather'




import { CruDel, CrudGet, CrudGetSinglePro, CrudPost, CrudUpdata } from "./Apis/CrudPost";
import FakeStoreGetApi from "./Apis/FakeStoreGetApi";
import FakeStorePostApi from "./Apis/FakeStorePostApi";
import GetApi from "./Apis/GetApi";
import RealPostApiVertex from "./Apis/RealPostApiVertex";

// const WeatherCom = lazy(() => import("./Apis/SecondWeather"));
const App = () => {
  // const [showWea, setShowWea] = useState(false);

  return (
    <div>
      {/* <h1>I am a weather app</h1>

      <button
        className="bg-red-400 p-2 m-2 "
        onClick={() => setShowWea(!showWea)}
      >
        show weather App
      </button> */}

      {/* <WeatherApi/> */}
      {/* {showWea && (
        <Suspense
          fallback={<div className="text-red-400">Loading .... weather </div>}
        >
          <WeatherCom />
        </Suspense>
      )} */}

      {/* <GetApi/> */}
{/* <FakeStorePostApi/> */}
      {/* <FakeStoreGetApi/> */}
      {/* <RealPostApiVertex/> */}
      <CrudPost/>
      <CrudGet/>
      <CruDel/>
      <CrudUpdata/>
      <CrudGetSinglePro/>
    </div>
  );
};

export default App;
