const PersonForm = ({ add, name, number, hName, hNumber }) => {
  return (
    <form onSubmit={add}>
      <div>
        name:
        <input value={name} onChange={hName} />
      </div>
      <div>
        number:
        <input value={number} onChange={hNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
