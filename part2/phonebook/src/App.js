import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const API_BASE_PATH = 'http://localhost:3001/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get(API_BASE_PATH)
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  
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
    axios.post(API_BASE_PATH, personObject)
          .then(res => {console.log("Posted", res)})
          .catch(e => {console.log("Could not post", e)})
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = filter 
        ? persons.filter(person => person.name
                                          .toLowerCase()
                                          .includes(filter.toLowerCase()))
        : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange}/>
      <h2>Add new person</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons}/>
    </div>
  )
}

export default App