import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  margin-left: 25px;
  border: none;
  background: none;
  font-size: 24px;
  font-weight: bold;
  color: #ff6f69;
`

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;

  .done {
    text-decoration: line-through;
  }
`

class Todo extends Component {
  render() {
    const { done, onToggleDone, text, onDeleteClicked } = this.props
    return (
      <ListItem>
        <li className={done ? 'done' : ''} onClick={onToggleDone}>
          {text}
        </li>
        <Wrapper onClick={onDeleteClicked}>x</Wrapper>
      </ListItem>
    )
  }
}

export default Todo
