import axios from 'axios';

const API_KEY = '8c06347169c244f91be8db85dd5e93e0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ca`;
  // axios get request will return a promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}