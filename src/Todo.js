import React, { Component } from 'react'

class Todo extends Component {
  state = {
    done: false
  }

  toggleDone = () => {
    this.setState({ done: !this.state.done })
  }

  render() {
    return (
      <li className={this.state.done ? 'done' : ''} onClick={this.toggleDone}>
        {this.props.text}
      </li>
    )
  }
}

export default Todo
