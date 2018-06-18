import React, { Component } from 'react';
import './App.css';
import PersonImport from './Person/Person'
class App extends Component {
  state = {//in state we can add anything
    Persons: [//e.g. array of person (functional component)
    {name:'max', city:'WA'},
    {name:'mila', city:'MA'}
  ],
  otherState: 'otherval'
}


switchNameHandler=(NewName)=>
{
  console.log('switch was clicked');
  this.setState({Persons: [//e.g. array of person (functional component)
    {name:NewName, city:'Washington'},
    {name:'mila', city:'MA'}
  ]}
)
}
  render() {
    return (
      <div className="App">
     <h1> React Application</h1>
     <p> Working! </p>
     <button onClick={this.switchNameHandler.bind(this,'Maxmuller')}>Switch Name</button>
     <PersonImport name={this.state.Persons[0].name} city={this.state.Persons[0].city}></PersonImport>
     <PersonImport name={this.state.Persons[1].name} city={this.state.Persons[1].city} click={this.switchNameHandler.bind(this,'Man!')}>hobby</PersonImport>
     <PersonImport name="Phil" city="NY"></PersonImport>
     <PersonImport name="John" city="NJ">My hobby is drawing</PersonImport>
     <PersonImport name="Alex" city="CA"></PersonImport>
    
     </div>
    );
  }
}

export default App;
