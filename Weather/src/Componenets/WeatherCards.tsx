import React, { useEffect, useState } from "react";
import { weatherType } from "../Service";


const WeatherCard =(props)=>{

  const [newUi, setNewUi] = useState <Weatherdata | null>(null);

  type Weatherdata ={
    name: string;
    main:{
      temp: number;
    }
  } 
  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=51b7e07a039253d3045ad93e4794f3ec&units=imperial`;

  const fetchWeather = async () : Promise<Weatherdata | null> =>{
    let data : Weatherdata | null = null;
   try {
    const res : Response = await fetch(url);
    data = await res.json() as Weatherdata;
    console.log(data);
    setNewUi(data);
   } catch (e) {
    console.error(e);
   }
   finally{
    return data;
   }
  }

  useEffect(()=>{
    setNewUi(null);
    fetchWeather();
  }, [])


  return(
    <div className="h-[450px] w-[320px]  rounded-[20px] bg-[#4d718329] backdrop-blur-sm shadow-sm shadow-[#4c6f8280]/20 relative pt-[10rem] ">
    {/* // <img
    //   src=
    //   alt="partly cloudy"
    //   className="absolute -top-[90px] -right-[35px] scale-105"
    // /> */}
    <p className="text-[35px]  w-[80%] mx-auto text-white font-light">
      {newUi?.name}
      <span className="font-semibold">{newUi?.main.temp}</span>
    </p>
    <p className="text-[20px] text-white w-[80%] mx-auto mt-4 ">
      wind speed : 11 km
    </p>
    <p className="text-[20px] text-white w-[80%] mx-auto mt-4 ">
      Tuesday : 19:52
    </p>
    <p className="text-[20px] text-white w-[80%] mx-auto mt-4 ">Cloudy </p>
  </div>
  );
}

export {WeatherCard};