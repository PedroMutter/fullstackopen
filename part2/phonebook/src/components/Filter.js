const Filter = ({ search }) => {
  return (
    <div>
      filter shown with
      <input placeholder="Search..." onChange={search} />
    </div>
  )
}

export default Filter
