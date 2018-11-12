import React, { Component } from 'react'
import Todo from './Todo'
import Input from './Input'
import Counter from './Counter'
import './App.css'
import './Input.css'

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

  render() {
    const cntDone = this.state.todos.filter(item => item.done).length
    return (
      <section>
        <h1>Today's todolist</h1>
        <Counter num={cntDone} />
        <Input value={this.valueFromInput} />
        <ul>
          {this.state.todos.map((todo, index) => (
            <Todo
              key={Math.random()}
              text={todo.text}
              done={todo.done}
              onToggleDone={() => this.toggleDone(index)}
              onDeleteClicked={() => this.deleteClicked(index)}
            />
          ))}
        </ul>
      </section>
    )
  }

  toggleDone = index => {
    const { todos } = this.state
    const newTodos = [
      ...todos.slice(0, index),
      { ...todos[index], done: !todos[index].done },
      ...todos.slice(index + 1)
    ]

    this.setState({
      todos: newTodos
    })
  }

  valueFromInput = event => {
    const { todos } = this.state
    if (event.key === 'Enter') {
      const newTodos = [{ text: event.target.value, done: false }, ...todos]
      this.setState({
        todos: newTodos
      })
      event.target.value = ''
    }
  }

  deleteClicked = index => {
    const { todos } = this.state
    const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)]

    this.setState({
      todos: newTodos
    })
  }
}

export default App
