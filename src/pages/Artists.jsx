import React from 'react'
import Slider from '../components/artists/Slider'
import styled from 'styled-components'

import ArtistsGrid from '../components/home/ArtistsGrid'

import dope from '../images/albums/dope.jpg'
import gentle from '../images/albums/gentle.jpg'
import heels from '../images/albums/heels.jpg'
import hmm from '../images/albums/hmm.jpg'
import jonas from '../images/albums/jonas.jpg'
import lee from '../images/albums/lee.jpg'
import malone from '../images/albums/malone.jpg'
import thick from '../images/albums/thick.jpg'
import weekend from '../images/albums/weekend.jpg'
import cute from '../images/albums/cute.jpg'
import wayne from '../images/albums/wayne.jpg'
import mask from '../images/albums/mask.jpg'
import Hero from '../components/common/Hero'

const artists = [
  dope,
  gentle,
  heels,
  hmm,
  jonas,
  lee,
  malone,
  thick,
  weekend,
  cute,
  wayne,
  mask,
]

const HeroWrapper = styled.div`
  width: 100%;
  display: none;
  @media (max-width: 480px) {
    /* position: relative;
    top: 150px; */
    display: block;
  }
`

const SectionTitle = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  color: #ffdb61;
  margin: 10rem 0;
  text-transform: uppercase;
  text-align: center;
  position: relative;

  @media (max-width: 480px) {
    font-size: 3rem;
    margin: 5rem 0;
  }
`

const Text = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 100;
  color: #ccc;
  margin-bottom: 10rem;
  width: 80%;
  margin: 0 auto 10rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    text-align: center;
  }
`

function Artists() {
  return (
    <>
      <HeroWrapper>
        <Hero line1="Artists" />
      </HeroWrapper>
      <Slider />
      <SectionTitle>DISCLAIMER</SectionTitle>
      <Text>
        No artist currently signed under CCM as the label is currently scouting
        for some few talented unsigned artists ,the record label is looking at
        signing a few unsign artist on a starting two years record contract deal
        worth $1 million( one million dollars) With a great vision of producing
        the next big stars the record label(CCM) is willing to support all
        artists signed under the management in achieving their dreams, City
        Billionaires music is not in a hurry in getting the kind artist we need
        because when it comes to making good music we really got high taste
        “says wale . The record label have been working so hard in putting the
        right team together to achieve it purpose and have also spent almost
        $600,000 in achieving this . We need an artist who is marketable and
        musically oriented either in rapping or singing because the music
        business is getting better and Serious everyday “says wale . In terms of
        distribution CCM has some high profile distribution mogul to work with
        the team ,making sure our artist are network properly globally . We have
        been trying to connect with as many artist as possible on social media
        to see if they got what we need in an artist,why social media ? over the
        years the power of social media in the music industry is not to be
        underestimated even for a known artist or underground artist as this
        social media platforms has help a lot when it comes to building fan base
        and networking your music as an underground artist,there are many
        unsigned underground artists all over social media trying to plug with a
        good label and that’s why social media is one place we want to
        capitalize our search on.
        <br />
        <br />
        All artists displayed on this page are high performant artists currently
        trending in various records labels and are not signed to City
        Billionaires Music
      </Text>
      <ArtistsGrid images={artists} />
    </>
  )
}

export { Artists }
