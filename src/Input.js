import React, { Component } from 'react'

class Input extends Component {
  render() {
    const { value } = this.props
    return <input placeholder="What's next?" onKeyUp={value} />
  }
}

export default Input
