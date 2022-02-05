import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import {
  getAllRecords,
  createRecord,
  deleteRecord,
  updateRecord,
} from "./services/api";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getAllRecords().then((records) => {
      setPersons(records);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleInput = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    const matchedPerson = persons.find(
      (person) => personObject.name.toLowerCase() === person.name.toLowerCase()
    );

    if (matchedPerson !== undefined) {
      updatePerson(matchedPerson.id, personObject);
      return;
    }

    addPerson(personObject);
  };

  const updatePerson = (id, newPerson) => {
    const confirmation = window.confirm(
      `${newName} is already added to the phonebook!\nDo you want to replace their number with ${newNumber}?`
    );
    if (!confirmation) {
      setNewName("");
      setNewNumber("");
      return;
    }
    updateRecord(id, newPerson).then((response) => {
      setPersons(
        persons.map((person) => (person.id !== id ? person : response))
      );
      setNewName("");
      setNewNumber("");
    });
  };

  const addPerson = (person) => {
    createRecord(person).then((response) => {
      setPersons(persons.concat(response));
      setNewName("");
      setNewNumber("");
    });
  };

  const deletePerson = (id) => {
    const confirmation = window.confirm(
      `Are you sure you want to delete ${
        persons.find((person) => person.id === id).name
      }?`
    );
    if (!confirmation) return;
    deleteRecord(id).then((response) => {
      if (response === true) {
        setPersons(persons.filter((person) => person.id !== id));
      } else {
        window.alert(`Could not delete ${id}, resetting person list from db`);
        getAllRecords().then((records) => {
          setPersons(records);
        });
      }
    });
  };

  const filteredPersons = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <h2>Add new person</h2>
      <PersonForm
        addPerson={handleInput}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
