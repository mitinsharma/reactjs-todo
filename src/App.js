import React, { Component } from 'react';
import Todos from './components/Todos';
import Addtodo from './components/Addtodo';
import Header from './components/layout/Header';
import {v4 as uuidv4} from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
      title: 'todo 1',
      completed: false
      },{
        id: uuidv4(),
      title: 'todo 2',
      completed: true
      },{
        id: uuidv4(),
      title: 'todo 3',
      completed: false
      },{
        id: uuidv4(),
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

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <Addtodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} 
          markComplete={this.markComplete}
          delTodo = {this.delTodo}/>
        </div>
      </div>
    );
  }

}

export default App;
