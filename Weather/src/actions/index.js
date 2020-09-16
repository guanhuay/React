import axios from 'axios';

const API_KEY = 'a9baded212d48d7d32b1ca5c4e815a01';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator always retunr an action
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);
  
  // payload is optional, but it could carried data and passed it down to reducer
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
