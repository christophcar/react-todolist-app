import React, { Component } from 'react'
import styled from 'styled-components'

const InputField = styled.input`
  padding: 14px;
  font-size: 24px;
  border: none;
  border-radius: 8px;
  margin-bottom: 20px;

  &::placeholder {
    font-family: 'Nunito', sans-serif;
    color: #88d8b0;
    font-weight: 700;
  }
`

class Input extends Component {
  render() {
    const { value } = this.props
    return <InputField placeholder="+ Add new todo" onKeyUp={value} />
  }
}

export default Input
