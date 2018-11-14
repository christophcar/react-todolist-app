import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: lighter;
  font-style: italic;
`

class Counter extends Component {
  render() {
    return <Wrapper>Done: {this.props.num}</Wrapper>
  }
}
export default Counter
