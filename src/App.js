import React, { Component } from 'react'
import Todo from './Todo'
import './App.css'

class App extends Component {
  state = {
    todos: [
      { text: 'Eat icecream', done: false },
      { text: 'Walk around', done: false },
      { text: 'Take long break', done: false },
      { text: 'Start coding', done: false },
      { text: 'Read a book', done: false }
    ]
  }

  toggleDone = index => {
    const { todos } = this.state
    const newTodos = [
      ...todos.slice(0, index),
      { ...todos[index], done: true },
      ...todos.slice(index + 1)
    ]

    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <section>
        <h1>Today's todolist</h1>
        <input placeholder="What's next?" />
        <ul>
          {this.state.todos.map((todo, index) => (
            <Todo
              text={todo.text}
              onToggleDone={() => this.toggleDone(index)}
            />
          ))}
        </ul>
      </section>
    )
  }
}

export default App
