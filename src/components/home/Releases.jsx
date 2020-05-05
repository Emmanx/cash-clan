import React from 'react';
import styled from 'styled-components';

import dope from '../../images/albums/dope.jpg';
import gentle from '../../images/albums/gentle.jpg';
import heels from '../../images/albums/heels.jpg';
import hmm from '../../images/albums/hmm.jpg';
import jonas from '../../images/albums/jonas.jpg';
import lee from '../../images/albums/lee.jpg';
import malone from '../../images/albums/malone.jpg';
import thick from '../../images/albums/thick.jpg';
import weekend from '../../images/albums/weekend.jpg';
import cute from '../../images/albums/cute.jpg';
import wayne from '../../images/albums/wayne.jpg';
import mask from '../../images/albums/mask.jpg';

const Section = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  color: #ffdb61;
  margin: 10rem 0;
  text-transform: uppercase;
  text-align: center;
`;

const Grid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  img {
    width: 25%;
    /* margin: 1rem; */
  }
`;

const Button = styled.button`
  background: #ffdb61;
  color: #000;
  text-align: center;
  padding: 2rem 4rem;
  font-size: 16px;
  margin: 5rem auto;
  border-radius: 5px;
`;

function Releases() {
  return (
    <Section>
      <SectionTitle>Cash Clan Trending Artists</SectionTitle>
      <Grid>
        <img src={dope} alt="album art" />
        <img src={gentle} alt="album art" />
        <img src={heels} alt="album art" />
        <img src={jonas} alt="album art" />
        <img src={lee} alt="album art" />
        <img src={malone} alt="album art" />
        <img src={thick} alt="album art" />
        <img src={weekend} alt="album art" />
        <img src={hmm} alt="album art" />
        <img src={cute} alt="album art" />
        <img src={wayne} alt="album art" />
        <img src={mask} alt="album art" />
      </Grid>
      <Button>Feature an Artist</Button>
    </Section>
  );
}

export default Releases;
