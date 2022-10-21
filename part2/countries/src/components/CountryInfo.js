import CountryWeather from './CountryWeather'

const CountryInfo = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area.toLocaleString()} Km²</p>
      </div>
      <div>
        <h3>Languages:</h3>
        <ul>{Object.values(country.languages).map(language =>
          <li key={language}>{language}</li>)}
        </ul>
      </div>
      <img src={country.flags.png} alt='flag'></img>
      <CountryWeather country={country} />
    </div>
  )
}

export default CountryInfo
