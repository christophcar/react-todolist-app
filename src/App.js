import React, { Component } from 'react'
import Todo from './Todo'
import './App.css'

class App extends Component {
  todos = [
    'Eat icecream',
    'Walk around',
    'Take long break',
    'Start coding',
    'Read a book'
  ]

  render() {
    return (
      <div>
        <ul>
          {this.todos.map(todo => (
            <Todo text={todo} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
