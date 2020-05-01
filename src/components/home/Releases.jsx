import React from 'react';
import styled from 'styled-components';

import a from '../../images/albums/1.webp';
import b from '../../images/albums/2.jfif';
import c from '../../images/albums/3.webp';
import d from '../../images/albums/5.png';
import { Container } from '../common/Grid';

const Section = styled.section`
  padding: 5rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: rgb(206, 152, 41);
  margin-bottom: 5rem;
  text-transform: uppercase;
`;

const Grid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 24%;
  }
`;

function Releases() {
  return (
    <Section>
      <Container>
        <SectionTitle>Releases</SectionTitle>
        <Grid>
          <img src={a} alt="album art" />
          <img src={b} alt="album art" />
          <img src={c} alt="album art" />
          <img src={d} alt="album art" />
        </Grid>
      </Container>
    </Section>
  );
}

export default Releases;
