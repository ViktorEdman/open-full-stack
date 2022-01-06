import React from 'react'
import Person from './Person'

const Persons = ({ persons }) => <ul>
    {persons.map(person => <Person
        person={person}
        key={person.name}
    />)}
</ul>

export default Persons
