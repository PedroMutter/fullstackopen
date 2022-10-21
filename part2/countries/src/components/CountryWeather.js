import axios from 'axios'
import { useEffect, useState } from 'react'

const CountryWeather = ({ country }) => {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          appid: process.env.REACT_APP_API_KEY,
          lat: country.capitalInfo.latlng[0],
          lon: country.capitalInfo.latlng[1],
          units: 'metric'
        }
      })
      .then(res => setWeather(res.data))
  }, [country.capitalInfo.latlng])

  if (weather.length === 0) return null
  else
    return (
      <div>
        <h2>Weather in {country.capital}</h2>
        <p>Temperature: {weather.main.temp} Celcius</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>
    )
}

export default CountryWeather
