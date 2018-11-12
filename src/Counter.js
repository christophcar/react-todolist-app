import React, { Component } from 'react'
import './Counter.css'
class Counter extends Component {
  render() {
    return <h3>Done: {this.props.num}</h3>
  }
}
export default Counter
