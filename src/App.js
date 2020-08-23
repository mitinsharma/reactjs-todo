import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import Addtodo from './components/Addtodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import {v4 as uuidv4} from 'uuid';

import './App.css';
import Axios from 'axios';

class App extends Component {
  state = {
    /*
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
    */
   todos: []
  }

  componentWillMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }));
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
    /**
     * Axios Post
     * 
    Axios.post('url', {
      title: '',
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }))
     */

    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Addtodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} 
              markComplete={this.markComplete}
              delTodo = {this.delTodo}/>
            </React.Fragment>
          )}/>
          <Route path="/about" component = {About} />
        </div>
      </div>
      </Router>
    );
  }

}

export default App;
