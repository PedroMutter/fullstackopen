import CountryInfo from './CountryInfo'
import CountryList from './CountryList'

const Display = ({ countries, query, setQuery }) => {
  const countriesToDisplay = countries.filter(country =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  )

  if(countriesToDisplay.length > 10) 
    return <p>Too many matches, specify another filter.</p>

  else if (countriesToDisplay.length > 1) 
    return <CountryList countries={countriesToDisplay} selectCountry={(name) => setQuery(name)} />

  else if (countriesToDisplay.length === 1)
    return <CountryInfo country={countriesToDisplay[0]} />

  else 
    return <p>No country found.</p>
}

export default Display
