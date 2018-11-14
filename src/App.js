import React, { Component } from 'react'
import Todo from './Todo'
import Input from './Input'
import Counter from './Counter'
import Seperator from './Seperator'
import ProgressBar from './ProgressBar'
import ToggleButton from './ToggleButton'
import styled from 'styled-components'
import uid from 'uid'

const Wrapper = styled.section`
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333;
  width: 75%;
  margin: 0 auto;
  font-size: 24px;
  line-height: 2;
`

const Heading = styled.h1`
  margin: 0;
  margin-top: 15px;
`

class App extends Component {
  state = {
    todos: this.load()
  }

  render() {
    const onCountDone = this.state.todos.filter(item => item.done).length
    const percentage = onCountDone / this.state.todos.length
    this.save()

    return (
      <Wrapper>
        <Heading>Today's todolist</Heading>
        <Counter num={onCountDone} />
        <ProgressBar percentage={percentage} height={15} />
        <Input value={this.valueFromInput} />
        <Seperator text="OPEN TODOS" />
        <ul>
          {this.state.todos
            .filter(item => !item.done)
            .map(todo => (
              <Todo
                key={todo.id}
                text={todo.text}
                done={todo.done}
                onToggleDone={() => this.toggleDone(todo.id)}
                onDeleteClicked={() => this.deleteClicked(todo.id)}
              />
            ))}
        </ul>
        <Seperator text="COMPLETED TODOS" />
        <ul>
          {this.state.todos
            .filter(item => item.done)
            .map(todo => (
              <Todo
                key={todo.id}
                text={todo.text}
                done={todo.done}
                onToggleDone={() => this.toggleDone(todo.id)}
                onDeleteClicked={() => this.deleteClicked(todo.id)}
              />
            ))}
        </ul>
        <ToggleButton
          defaultText="Foo"
          alternativeText="Bar"
          onClick={() => console.log('click')}
          inititalDefault={true}
        />
      </Wrapper>
    )
  }

  save() {
    localStorage.setItem('todo-app-todos', JSON.stringify(this.state.todos))
  }

  load() {
    // could also write this without try and catch...
    try {
      return JSON.parse(localStorage.getItem('todo-app-todos')) || []
    } catch (err) {
      return []
    }
  }

  toggleDone = id => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)
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
      const newTodos = [
        { text: event.target.value, done: false, id: uid() },
        ...todos
      ]
      this.setState({
        todos: newTodos
      })
      event.target.value = ''
    }
  }

  deleteClicked = id => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)
    const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)]

    this.setState({
      todos: newTodos
    })
  }
}

export default App
