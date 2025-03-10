import React from "react";
import { Navbar } from "../Componenets/Navbar";
import { Search } from "../Componenets/Search";
import { Filters } from "../Componenets/Filters";
import { WeatherCard } from "../Componenets/WeatherCards";
interface HomeProps{
}

const Home: React.FC <HomeProps> =(props)=>{
  return(
    <>
      <main className="pt-4 pb-10 2xl:overflow-hidden xl:overflow-hidden 2xl:pt-7 xl:pt-7 lg:overflow-hidden lg:pt-7">
      <Navbar/>
      <p className="mt-6 w-[700px] h-[90px] mx-auto text-[37px] text-center text-white">Seeing the weather of the whole world with <span className="font-semibold" style={{
        background: "-webkit-linear-gradient(0deg, #CAECFF 100%, #78CFFF 100%)",
        WebkitBackgroundClip : "text",
        WebkitTextFillColor : "transparent"
      }}>Dark Weather!</span>
      </p>
      <div className="container flex justify-between mx-auto mt-10 2xl:px-12 xl:px-12 lg:px-12 ">
      <Search />
      <Filters />
      </div>
      <div className="flex  container mx-auto justify-between mt-16 2xl:px-12 xl:px-12 lg:px-12 lg:gap-6 ">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
      </main>
    </>
  );
};
export {Home};