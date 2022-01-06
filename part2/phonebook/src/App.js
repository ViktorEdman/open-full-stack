import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: "040-1234567"},
    {name: 'Viktor Edman', number: '0722-077793'},
    {name: 'Eva Edman', number: '0739-131840'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    
    if (persons.filter(person => person.name === newName).length > 0) {
      alert(`${newName} is already added to the phonebook!`)
      setNewName('')
      return
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = filter 
        ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input 
          type="text"
          onChange={handleFilterChange} />
      </div>
      <h2>Add new person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
          number: <input
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map(person =>
          <li key={person.name+" "+person.number}>{person.name} {person.number}</li>) }
      </ul>
    </div>
  )
}

export default App