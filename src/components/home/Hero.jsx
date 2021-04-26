import React from 'react'
import styled from 'styled-components'

import hero from '../../images/hero.jpg'
import { Container, Row } from '../common/Grid'

// linear-gradient(rgba(206, 152, 41, 0.3), rgba(206, 152, 41, 0.3)),

const Banner = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  backdrop-filter: grayscale(0.6);
`

const Content = styled(Row)`
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  color: #fff;
  font-size: 9rem;
  font-weight: 600;
  line-height: 15rem;
  text-align: center;
  text-transform: uppercase;
  font-style: italic;

  @media (max-width: 480px) {
    font-size: 5rem;
    line-height: 6rem;
  }

  @media (max-width: 320px) {
    font-size: 3.5rem;
    line-height: 4.5rem;
  }
  /* 
  span {
    border-bottom: 10px solid #ffdb61;
  } */
`

const Scroll = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  top: 15%;
`

const Chevron = styled.div`
  position: absolute;
  width: 35px;
  height: 12px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;

  &:first-child {
    animation: move 3s ease-out 1s infinite;
  }

  &:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }

  &:before,
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #ffdb61;
  }

  &:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  &:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }

  @keyframes move {
    25% {
      opacity: 1;
    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
  }
`

function Hero() {
  return (
    <>
      <Banner>
        <Container>
          <Content>
            <Title>
              <span>Black Royce</span> <br /> <span>Music</span>
            </Title>
            <Scroll>
              <Chevron />
              <Chevron />
              <Chevron />
            </Scroll>
          </Content>
        </Container>
      </Banner>
    </>
  )
}

export default Hero
