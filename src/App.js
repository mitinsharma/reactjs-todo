import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
      title: 'todo 1',
      completed: false
      },{
        id: 2,
      title: 'todo 2',
      completed: true
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

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} 
        markComplete={this.markComplete}
        delTodo = {this.delTodo}/>
      </div>
    );
  }

}

export default App;
