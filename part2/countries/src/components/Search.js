const Search = ({ query, search }) =>
  <div>
    Find countries: <input value={query} onChange={search} />
  </div>

export default Search
