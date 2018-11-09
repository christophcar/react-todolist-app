import React, { Component } from 'react'

class Todo extends Component {
  render() {
    const { done, onToggleDone, text, onDeleteClicked } = this.props
    return (
      <div>
        <li className={done ? 'done' : ''} onClick={onToggleDone}>
          {text}
        </li>
        <button onClick={onDeleteClicked}>X</button>
      </div>
    )
  }
}

export default Todo
