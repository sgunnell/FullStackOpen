import React from "react";
import Person from "./Person"

const Persons = ({ filter,persons,filteredPersons }) => 
    <div>

        { filter==="" ?
            persons.map(person => <Person key={person.id} person={person}/>) :
            filteredPersons.map(person=> <Person key={person.id} person={person}/>)
        }
    
    </div>

export default Persons;