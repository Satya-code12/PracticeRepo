import React from "react";
import { Navbar } from "../Componenets/Navbar";
import { Search } from "../Componenets/Search";
import { Filters } from "../Componenets/Filters";
import { WeatherCard } from "../Componenets/WeatherCards";

const Home: React.FC <HomeProps> =(props)=>{
  return(
    <>
      <main className="pt-4 pb-10 lg:overflow-hidden md:overflow-hidden md:pt-7 lg:pt-7 xl:pt-7 xl:overflow-hidden 2xl:pt-7 2xl:overflow-hidden  ">
      <Navbar/>
      <p className="mt-6 w-[700px] h-[90px] mx-auto text-[37px] text-center text-white">Seeing the weather of the whole world with <span className="font-semibold" style={{
        background: "-webkit-linear-gradient(0deg, #CAECFF 100%, #78CFFF 100%)",
        WebkitBackgroundClip : "text",
        WebkitTextFillColor : "transparent"
      }}>Dark Weather!</span>
      </p>
      <div className="container flex justify-between mx-auto mt-10 lg:px-12 xl:px-12 2xl:px-12">
      <Search />
      <Filters />
      </div>
      <div className="flex container mx-auto justify-between mt-16 lg:px-12 lg:gap-6 xl:px-12 2xl:px-12">
        <WeatherCard lat={20.8653} lon={85.1842} />
        {/* <WeatherCard />
        <WeatherCard /> */}
      </div>
      </main>
    </>
  );
};
export {Home};