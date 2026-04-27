import React, { useActionState } from 'react'
import WeatherApi from './WeatherApi';

const weatherFun =async (prevState,formData)=>{
  
         const city=formData.get("city");
         const res=await fetch(`http://api.weatherapi.com/v1/current.json?key=3f8ae6e3b2274ac6a3865056250904&q=${city}&aqi=no`);
         const json =await res.json();
         if(json.error) return {error:json.error.message,data:null};

         return {data:json,error:null}
         


}


const SecondWeather = () => {


const [state,formAction,loading]=useActionState(weatherFun,{error:null,data:null})

  return (
    <div>
  
  <form action={formAction}>
    <input name="city" placeholder="Enter city..." />
      <button type="submit">{loading ? 'Loading...' : 'Search'}</button>
  </form>

  {loading  ?  <p>loading...</p>: ""}

  {state.error && <p>{state.error}</p>}

  {state.data && <div>
     <p>{state.data.location.name}</p>
     <p>{state.data.current.temp_c}*</p>
     </div>}
{/* <WeatherApi/> */}

    </div>
  )
}

export default SecondWeather