export type weatherType ={
  name : string;
  main:{
    temp: number;
  }
  wind:{
    speed: number;
  }
  weather: [
    {
      main: string;
    }
  ];
}

export async function fetchWeatherApi( lat : number ,lon : number):Promise<weatherType | null>{

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=51b7e07a039253d3045ad93e4794f3ec`;

  try{
    const response: Response = await fetch(url);
    const data:weatherType = await response.json();
    console.log(data);
    return data;
  }
  catch(error){
    console.error(error);
  }
  return  null;
}