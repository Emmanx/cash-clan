import React, { useEffect, useState } from 'react'

import ArtistsGrid from '../components/home/ArtistsGrid'
import Biography from '../components/home/Biography'
import Hero from '../components/home/Hero'
import { Link } from 'react-router-dom'
import cute from '../images/albums/cute.jpg'
import dope from '../images/albums/dope.jpg'
import gentle from '../images/albums/gentle.jpg'
import heels from '../images/albums/heels.jpg'
import hmm from '../images/albums/hmm.jpg'
import jonas from '../images/albums/jonas.jpg'
import lee from '../images/albums/lee.jpg'
import malone from '../images/albums/malone.jpg'
import mask from '../images/albums/mask.jpg'
import styled from 'styled-components'
import thick from '../images/albums/thick.jpg'
import wayne from '../images/albums/wayne.jpg'
import weekend from '../images/albums/weekend.jpg'

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

function Home() {
  const [showWarning, toggleWarning] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    if (!sessionStorage.getItem('modalShown')) {
      toggleWarning(true)
      sessionStorage.setItem('modalShown', '1')
    }
  }, [])

  return (
    <>
      <Hero />
      <Biography />
      <ArtistsGrid images={artists} title={'Currently Trending Artists'} />

      {showWarning && (
        <WarningModal>
          <div>
            <p>
              Warning{' '}
              <span role="img" aria-label="Warning">
                ⚠️
              </span>{' '}
              to verify you are not been referred to this site by a scammer
              please send a message to{' '}
              <a href="mailto:blackroycemusic@gmail.com">
                blackroycemusic@gmail.com
              </a>{' '}
              Or send a message to our official Instagram page @blackroycemusic
              Just to avoid been scam by impersonators using the label’s name
            </p>
            <Button onClick={() => toggleWarning(false)}>Close</Button>
          </div>
        </WarningModal>
      )}
    </>
  )
}

export { Home }

const WarningModal = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #000;
  color: #fff;
  padding: 5rem;

  @media (max-width: 776px) {
    padding: 3rem;
  }

  div {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media (max-width: 776px) {
      flex-direction: column;
    }

    p {
      font-size: 1.6rem;
      line-height: 3rem;
      margin-right: 5rem;

      a {
        color: #ffdb61;
      }

      @media (max-width: 776px) {
        margin-right: 0;
        text-align: center;
      }
    }
  }
`

const Button = styled(Link)`
  background: #ffdb61;
  color: #000;
  text-align: center;
  font-size: 15px;
  text-decoration: none;
  height: 4rem;
  width: 27rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  @media (max-width: 776px) {
    margin-top: 3rem;
  }
`
