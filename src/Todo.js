import React, { Component } from 'react'

class Todo extends Component {
  render() {
    return <li onClick={this.props.onToggleDone}>{this.props.text}</li>
  }
}

export default Todo
