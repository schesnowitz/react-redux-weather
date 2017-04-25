import axios from 'axios'; 

const WEATHER_API = '133ee1b2ffeb1a5194049ee7136acb36'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API}`
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`; 
  const request = axios.get(url);

  // console.error('Request:', request);
  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
