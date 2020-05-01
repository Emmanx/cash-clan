import React from 'react';
import styled from 'styled-components';
import { Container } from '../common/Grid';

const Form = styled.form`
  width: 500px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 5rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: rgb(206, 152, 41);
  margin-bottom: 5rem;
  text-align: center;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid rgb(206, 152, 41);
  background: transparent;
  padding: 1rem;
  border-radius: 5px;
  width: 100%;
  margin: 2rem 0;
`;

const Submit = styled.button`
  border: none;
  outline: none;
  background-color: rgb(206, 152, 41);
  color: #fff;
  text-align: center;
  padding: 1rem;
  display: block;
  border-radius: 5px;
  width: 100%;
`;

function Subscribe() {
  return (
    <Section>
      <Container>
        <SectionTitle>Keep Up With Cash Clan</SectionTitle>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Country" />
          <Submit>Submit</Submit>
        </Form>
      </Container>
    </Section>
  );
}

export default Subscribe;
