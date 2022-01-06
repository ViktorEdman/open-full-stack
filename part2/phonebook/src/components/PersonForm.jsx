import React from 'react'

const PersonForm = (props) => {
    const addPerson = props.addPerson
    const newName = props.newName
    const handleNameChange = props.handleNameChange
    const newNumber = props.newNumber
    const handleNumberChange = props.handleNumberChange
    return (
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
    )
}

export default PersonForm
