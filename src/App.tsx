import React from 'react';
import './App.css';
import {Greet} from "./components/Greet";
import {Person} from "./components/Person";
import {PersonList} from "./components/PersonList";
import {Status} from "./components/Status";
import {Heading} from "./components/Heading";
import {Oscar} from "./components/Oscar";
import {Button} from "./components/Button";
import {EventButton} from "./components/EventButton";


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
            <div className="StandardTypes">
                <Greet name={'jason'} messageCount={20} isLoggedIn={true}/>
                <Person name={PersonName}/>
                <PersonList name={NameList}/>
                <Status status={'success'}/>
                <Heading>Bloop</Heading>
                <Oscar><Heading>The Oscar Goes To meeeeee!</Heading></Oscar>
            </div>
            <div className="EventsAsProps">
                <Button handleClick={() => {
                    console.log("You Clicked Me");
                }}/>
                <EventButton handleEventClick={(event) => {
                    console.log("You clicked me tooooooo!", event);
                }}/>
            </div>
            
        </div>
        
  );
}

export default App;
