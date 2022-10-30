const Persons = ({ persons, query, destroy }) => {
  return (
    <ul>
      {persons
        .filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
        .map(p => (
          <li key={p.name}>
            {p.name} {p.number}
            <button onClick={() => destroy(p)}>delete</button>
          </li>
        ))}
    </ul>
  )
}

export default Persons
