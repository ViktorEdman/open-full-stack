import React from 'react'
import Person from './Person'

const Persons = ({ persons, deletePerson }) => <ul>
    {persons.map(person => <Person
        person={person}
        key={person.name}
        personId={person.id}
        deletePerson={deletePerson}
    />)}
</ul>

export default Persons
