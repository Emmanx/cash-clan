import React from 'react'
import styled from 'styled-components'

import chaz from '../../images/Chaz-Lifestyle-1-819x1024.jpg'
import mal from '../../images/Malachiae-Lifestyle-1-819x1024.jpg'

const Wrapper = styled.div`
  display: flex;
  width: 100%;

  img {
    flex: 1;
    object-fit: cover;
    object-position: center;
  }
`

function Images() {
  return (
    <Wrapper>
      <img src={chaz} alt="person" />
      <img src={mal} alt="person" />
    </Wrapper>
  )
}

export default Images
