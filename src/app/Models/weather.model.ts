export interface WeatherRootObject {
  message: string;
  cod: string;
  count: number;
  list: List[];
}

export interface List {
  id: number;
  name: string;
  coord: Coord;
  main: Main;
  dt: number; 
  wind: Wind;
  sys: Sys;
  rain?: any;
  snow?: any;
  clouds: Clouds;
  weather: Weather[];
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Clouds {
  all: number;
}

interface Sys {
  country: string;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Coord {
  lat: number;
  lon: number;
}