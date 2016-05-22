import axios from 'axios'

const API_KEY = 'f8be15976d8652feafc844ff2a5bb253'
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const URL = ROOT_URL + '&q=' + city + ',pl'
  const request = axios.get(URL)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
