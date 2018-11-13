import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
}

.Seperator .hr {
  width: 100%;
  margin: 10px;
  border-bottom: 3px solid black;
}

.Seperator span {
  white-space: nowrap;
  color: #ff6f69;
}

.completed {
  text-decoration: underline;
  font-weight: bold;
}`

class Seperator extends Component {
  render() {
    return (
      <Wrapper>
        <div className="hr" />
        <span className="completed">{this.props.text}</span>
        <div className="hr" />
      </Wrapper>
    )
  }
}

export default Seperator
