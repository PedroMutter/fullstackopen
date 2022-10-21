const CountryList = ({ countries, selectCountry }) => {
  return (
    <ul>
      {countries.map(country =>
        <li key={country.name.common}>
          {country.name.common}{' '}
          <button onClick={() => selectCountry(country.name.common)}>show</button>
        </li>
      )}
    </ul>
  )
}

export default CountryList
