import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;

  .completed {
    text-decoration: underline;
    font-weight: bold;
  }
`

// const Line = styled.div`
//   width: 100%;
//   margin: 10px;
//   border-bottom: ${props => props.width || 3}px solid black;
// `

const Text = styled.span`
  white-space: nowrap;
  color: #ff6f69;
`

class Seperator extends Component {
  render() {
    return (
      <Wrapper>
        {/* <Line width={10} /> */}
        <Text>{this.props.text}</Text>
        {/* <Line width={10} /> */}
      </Wrapper>
    )
  }
}

export default Seperator
