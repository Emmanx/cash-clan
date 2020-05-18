import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Section = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SectionTitle = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  color: #ffdb61;
  margin: 10rem 0;
  text-transform: uppercase;
  text-align: center;
`

const Grid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  img {
    width: 25%;
    /* margin: 1rem; */
  }
`

const Button = styled(Link)`
  background: #ffdb61;
  color: #000;
  text-align: center;
  padding: 2rem 4rem;
  font-size: 16px;
  margin: 5rem auto;
  border-radius: 5px;
`

function Artists({ title, images }) {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}
      <Grid>
        {images.map((img) => (
          <img key={img} src={img} alt="album art" />
        ))}
      </Grid>
      <Button to="/feature">Feature an Artist</Button>
    </Section>
  )
}

export default Artists
