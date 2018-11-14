import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.Wrapper`
  color: deeppink;
  background: cornflowerblue;

  &.active {
    color: cornflowerblue;
    background: skyblue;
  }
`

class ToggleButton extends Component {
  state = {
    isDefault: this.props.isDefault
  }

  handleToggle = () => {
    this.setState({
      isDefault: !this.state.isDefault
    })
    this.props.onClick()
  }

  render() {
    const { defaultText, alternativeText } = this.props
    const { isDefault } = this.state

    return (
      <Wrapper
        className={isDefault ? '' : 'active'}
        onClick={this.handleToggle}
      >
        {isDefault ? defaultText : alternativeText}
      </Wrapper>
    )
  }
}

export default ToggleButton
