import React from 'react'
import styled from 'styled-components'

import black from '../../images/store/black.png'
import black2 from '../../images/store/black2.png'
import grey from '../../images/store/grey.png'
import red from '../../images/store/red.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 5rem 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const ProductCard = styled.div`
  min-width: 300px;
  max-width: 300px;
  padding: 2rem;
  margin: 2rem 1rem;
  flex: 1;
  flex-shrink: 0;

  @media (max-width: 768px) {
    min-width: 50%;
    flex: 0;
  }

  @media (max-width: 480px) {
    flex: 1;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;

    @media (max-width: 768px) {
      height: auto;
    }
  }

  h4 {
    color: rgb(206, 152, 41);
    text-align: center;
    font-size: 2.5rem;
    margin-top: 3rem;
  }
`

function Images() {
  return (
    <Wrapper>
      <ProductCard>
        <img src={black} alt="Shirt" />
        <h4>Black Royce Plain Black T-Shirt</h4>
      </ProductCard>
      <ProductCard>
        <img src={black2} alt="Shirt" />
        <h4>Black Royce Black T-Shirt</h4>
      </ProductCard>
      <ProductCard>
        <img src={grey} alt="Shirt" />
        <h4>Black Royce Plain Grey T-Shirt</h4>
      </ProductCard>
      <ProductCard>
        <img src={red} alt="Shirt" />
        <h4>Black Royce Plain Red T-Shirt</h4>
      </ProductCard>
    </Wrapper>
  )
}

export default Images
