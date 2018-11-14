import styled from 'styled-components'

export default styled.div`
  height: ${props => props.height * 5}px;
  background: cornflowerblue;
  width: 100%;

  &::after {
    content: '';
    width: 100%;
    height: ${props => props.height * 5}px;
    display: block;
    width: ${props => props.percentage * 100}%;
    background: deeppink;
    transition: width 0.3s ease;
  }
`
