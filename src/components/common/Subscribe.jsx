import React from 'react'
import styled from 'styled-components'
import { Container } from '../common/Grid'

import mail from '../../images/mail.svg'

const Form = styled.form`
  width: 70%;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 90%;
  }
`

const Section = styled.section`
  padding: 5rem 0;
  color: #000;
  background: #ffdb61;
`

const SectionTitle = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 5rem;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  img {
    display: inline;
    max-width: 50px;
    padding-right: 1rem;
  }
`

const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #000;
  background: transparent;
  padding: 1rem;
  border-radius: 5px;
  width: 100%;
  margin: 2rem 0;

  &::placeholder {
    color: #000;
  }
`

const Submit = styled.button`
  border: none;
  background: #000;
  outline: none;
  color: #fff;
  text-align: center;
  padding: 1.5rem;
  display: block;
  border-radius: 5px;
  width: 100%;
  text-transform: uppercase;
`

function Subscribe() {
  return (
    <Section>
      <Container>
        <SectionTitle>
          {' '}
          <img src={mail} alt="Email icon" /> Keep Up With Black Royce Music
        </SectionTitle>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Country" />
          <Submit>Submit</Submit>
        </Form>
      </Container>
    </Section>
  )
}

export default Subscribe
