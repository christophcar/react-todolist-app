import React, { Component } from 'react'

class Input extends Component {
  render() {
    const { value } = this.props
    return <input placeholder="+ Add new todo" onKeyUp={value} />
  }
}

export default Input
