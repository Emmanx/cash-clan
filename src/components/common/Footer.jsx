import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  width: 100%;
  padding: 4rem;
  background: #000;
  color: #ffdb61;
  font-size: 1.6rem;
  text-align: center;
`

function Footer() {
  return (
    <Wrapper>
      <p>© 2021. All Rights Reserved. Black Royce Music</p>
    </Wrapper>
  )
}

export default Footer
