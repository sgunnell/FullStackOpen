import { useState, useEffect } from 'react';
import axios from 'axios';
import Persons from "./components/Persons";
import Form from "./components/Form";
import InputField from './components/InputField';



const App = (props) => {
  
  const [persons, setPersons] = useState([props.entries]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNum] = useState('')

  const [filter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(null)
  console.log(persons)

  
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    }

    const alreadyExists = persons.some((person)=>person.name===newName)

    if (newName===""){
      return;
    }
    if (alreadyExists){
      window.alert(
        `${newName} is already added to phonebook`,
      );
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
  }


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredPersons(filtered)
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <InputField 
          label="Filter shown with:"
          type="text"
          value= {filter}
          onChange= {handleFilterChange}
          />
      <h2> add a new</h2>
      <Form
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumChange}
      />
      <h2>Numbers</h2>
      <div>
        <Persons filter={filter} persons={persons} filteredPersons={filteredPersons}/>
      </div>
    </div>
  )
}

export default App