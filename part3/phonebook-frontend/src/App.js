import { useState, useEffect } from 'react'
import { Notification, Filter, PersonForm, Persons, personServices } from './index'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [query, setQuery] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  
  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)
  const handleSearch = event => setQuery(event.target.value)
  
  useEffect(() => {
    personServices
      .getAll()
      .then(persons => setPersons(persons))
  }, [])

  const addPerson = event => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons[persons.length-1].id + 1
    }

    const duplicatePerson = persons.find(person => person.name === personObject.name)
    
    if (persons.some(p => p.number === personObject.number)) {
      setErrorMessage(`the number '${newNumber}' is already added to the phonebook`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
      return
    }
    if (duplicatePerson !== undefined) {
      if (duplicatePerson.number !== personObject.number) {
        if (
          window.confirm(
            `'${personObject.name}' is already added to phonebook, replace the old number with a new one?`
            )
          ) {
            personServices
              .update(duplicatePerson.id, { ...duplicatePerson, number: personObject.number })
              .then(updatedPerson => {
                setPersons(persons.map(p => p.id !== updatedPerson.id ? p : updatedPerson))
                setSuccessMessage(`Updated '${personObject.name}' number`)
                setTimeout(() => {
                  setSuccessMessage(null)
                }, 3000)
              })
          }
      }
    } else {
      personServices
        .create(personObject)
        .then(createdPerson => {
          setPersons(persons.concat(createdPerson))
          setSuccessMessage(`Added ${personObject.name}`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 3000)
        })
        .catch(err => {
          console.log(err.response.data.error)
          setErrorMessage(err.response.data.error)
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
        })
    }
    setNewName('')
    setNewNumber('')
  }
    
  const deletePerson = person => {
    personServices
      .destroy(person.id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== person.id))
        setSuccessMessage(`${person.name} deleted`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 3000)
      })
      .catch(() => {
        setErrorMessage(`Information of ${person.name} has already been removed from server`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
        setPersons(persons.filter(p => p.id !== person.id))
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification success={successMessage} error={errorMessage} />
      <Filter search={handleSearch} />
      <h3>add a new</h3>
      <PersonForm
        add={addPerson}
        name={newName} hName={handleNameChange}
        number={newNumber} hNumber={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} query={query} destroy={deletePerson} />
    </div>
  )
}

export default App
