import { useState, useEffect } from 'react'
import axios from 'axios'
import Display from './components/Display'
import Search from './components/Search'

const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => setCountries(res.data))
  }, [])

  const handleSearch = event =>
    setQuery(event.target.value)

  return (
    <>
      <Search query={query} search={handleSearch} />
      <Display query={query} countries={countries} setQuery={setQuery} />
    </>
  )
}

export default App
