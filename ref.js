import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
state = {
  persons: [
    {id: '1', name:'max', age: 27},
    {id: '2', name:'manu', age: 26},
    {id: '3', name:'thanos', age: 25}
  ],
  username: 'supermax',
  showPersons: false
}


  switchNameHandler = () =>{
    //console.log('was clicked!')
    this.setState({
      persons: [
        {name:'maxmillian', age: 30},
        {name:'manuchuckwu', age: 29}
      ]
    })
  }

 /* nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name:'max', age: 30},
        {name: event.target.value, age: 29}
      ]
    })
  }*/

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }


  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.splice;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  usernameChangedHandler = (event) =>{
    this.setState({
      username: event.target.value
    })
  }

  

  render() {
    const styleCss = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>

          {this.state.persons.map((person, index) =>{
            return <Person 
            click={()=> this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age} 
            key={person.id} 
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}

        </div>
      )
      styleCss.backgroundColor = 'red';
      styleCss[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

  let classes  = [];
  if(this.state.persons <= 2){ //dynamically using css class
    classes.push('red'); // classes[red]
  };
  if(this.state.persons <= 1){
    classes.push('bold'); // classes[red, bold]
  };

    return (
      <div className="App">

      <h1>Hello there, React App</h1>
      <p className={classes.join(' ')}>This is really working</p>

      <button style={styleCss} onClick={this.togglePersonsHandler}>Hide/show name</button>
      <button style={styleCss} onClick={this.switchNameHandler}>Switch name</button>
      

      {/*
      this.state.showPersons ? //ternary operation to show/hide this div{jsx}
        <div>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
        click={this.switchNameHandler} 
        changed={this.nameChangedHandler}>
          My hobbies: football</Person>
      </div> : null //ternary operation to show/hide this div{jsx} */

      //{persons} 
        persons
      }

         <UserInput changed={this.usernameChangedHandler} currentUsername={this.state.username}/>
         <UserOutput username={this.state.username}/>
         <UserOutput username='thanos'/>

      </div>
    );
  }
}


export default Radium( App );
