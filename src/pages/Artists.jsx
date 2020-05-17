import React from 'react'
import Slider from '../components/artists/Slider'
// import styled from 'styled-components';

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

function Artists() {
  return (
    <>
      <Slider />
      <ArtistsGrid images={artists} />
    </>
  )
}

export { Artists }
