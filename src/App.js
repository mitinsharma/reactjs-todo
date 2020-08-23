import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
      title: 'take out the trash',
      completed: false
      },{
        id: 2,
      title: 'todo 2',
      completed: false
      },{
        id: 3,
      title: 'todo 3',
      completed: false
      },{
        id: 4,
      title: 'todo 4',
      completed: false
      }
      
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }

}

export default App;
