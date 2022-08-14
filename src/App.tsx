import React from 'react';
import './App.css';
import {Greet} from "./components/Greet";
import {Person} from "./components/Person";
import {PersonList} from "./components/PersonList";

function App() {
    
    const PersonName = {
        first: `Jason`,
        last: `Flynn`
    }
    
    const NameList = [
        {
            first: 'Bruce',
            last: 'Wayne' 
        },
        {
            first: 'David' ,
            last: 'Smith'
        },
        {
            first: 'Nicolas',
            last: 'Flemming'
        }
    ]
    
    return (
        <div className="App">
            <Greet name={'jason'} messageCount={20} isLoggedIn={false}/>
            <Person name={PersonName} />
            <PersonList name={NameList} />
        </div>
  );
}

export default App;
