import React from 'react'
import styled from 'styled-components'

import { Container, Row } from '../common/Grid.jsx'

import city from '../../images/city.jpg'

const Section = styled.section`
  padding: 10rem 0;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url(${city});
`

const Bio = styled.div`
  width: 100%;
  padding-right: 2rem;
`

// const BioImg = styled.img`
//   max-width: 45%;
//   object-fit: cover;
//   object-position: center bottom;
// `;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #ffdb61;
  margin-bottom: 5rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 3rem;
    line-height: 5rem;
  }
`

const Text = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 100;
  color: #ccc;

  @media (max-width: 480px) {
    text-align: center;
  }
`

function Biography() {
  return (
    <Section>
      <Container>
        <SectionTitle>ABOUT Black Royce Music</SectionTitle>
        <Row>
          <Bio>
            <Text>
              There’s been a revolution in hip-hop, and the people have spoken:
              Hip Hop/R&B is now the dominant genre in the U.S. for the very
              first time. While it’s not surprising that factors like streaming
              altered the music business, it is also true this genre has a power
              like never. And Nielsen saw all that was made, and said “let there
              be Black Royce Music.” And the culture on the streets listened,
              and saw it was good. Yes, at the forefront of this culture is one
              breakthrough, visionary record label: Black Royce Music. By
              keeping their ear to the streets rather than merely counting
              algorithm stats, Black Royce Music brings back the spirit that
              first spawned trail-blazing scenes when the fans are heard and the
              dog is not wagged by the industry tail. Just as punk erupted out
              of New York City and Motown from Detroit, the new wave of the most
              successful and acclaimed music comes out of a specific city at a
              specific moment—this time it’s Atlanta, home to CBM .Founded in
              2017 by Roland king and Coo wale David.
              <br />
              <br />
              Acting as managers, studio owners, and digital strategists as well
              as label executives, Roland and wale have aspire to created a new
              blueprint for success at a time when the fans have the biggest
              voice in the industry. “We’re real particular in what we sign,”
              says Roland.“They have to be authentic, whether it’s a street
              artist or an artist like Yachty, who’s very artistic in what he
              does. As a label, we don’t want to be pigeonholed to any one
              sound, but we are into building brands, so they have to have a
              story where we only need to take their very authenticity, wrap it
              up and sell it.” Bottom line – Black Royce Music exists to
              creatively support the artists’ vision. “You can’t just depend on
              the music alone,,says wale “Too many talented artists have gone
              unnoticed. You’ve got to have seven different hustles.” In
              addition, the label will take control of its own publishing,
              promotion, and management divisions,but also plan to sign
              distribution deal for our artist with UNIVERSAL MUSIC to help
              network our artists across the world,Everything we do is
              in-house,” says Roland. We even got our own producers, our own
              engineers.” Wale grew up in Indianapolis and moved to
              Atlanta—already hip-hop’s “Third Coast,” becoming the world’s
              leading city for street rap—in 1996 to start a record label
              with Atlanta Hawks forward Alan Henderson. He soon became involved
              in the management of such artists as Pastor Troy, Gucci Mane,
              and Young Jeezy (who, under Wale’s direction, scored two Number
              One albums on the Billboard 200). Meanwhile, Atlanta native Roland
              , who grew up idolizing No Limit mastermind Master R,was trying to
              launch an independent label called black Dolla. “We were out there
              grinding, trying to get things off the ground,” he says, “but
              we didn’t know what we were doing—we were just going around
              spending a lot of money and getting no results.” Having already
              invested over $300,000 into building a new recording studio, he
              approached Wale to see if he had any acts that might want to use
              the facility.
              <br />
              <br />
              “I was fed up with music, but I had this studio, so I was going to
              just rent that out and make my money back that way,” says Roland .
              “Wale saw it and said, ‘This is amazing, are you interested in
              starting your label thing back up?’ And Roland said yes .
              Recognizing that they would need resources to really grow CBM for
              global takeover.The key is to find a partner who really
              understands who you are,” says Wale . “And trust that
              understanding to allow Black Royce Music to run
              smoothly,I still get to do what I love to do, which is develop
              talent—find it early, develop it, and get it ready for global
              success.” Most notably, Black Royce Music took a forward-thinking
              approach to streaming, digital distribution, and meeting its
              audience in the places they discovered music. “We weathered the
              storm, Looking ahead, Wale and Roland want to go beyond borders of
              genre or country. “I don’t want just to be known as ‘the trap
              label,’ ” says Wale. “I want to be a world label. Quietly, these
              two men have created a company in the independent spirit(City
              Billionaires MUSIC). Roland , for one, wants to keep the focus on
              the results rather than the men behind the curtain. “I don’t need
              to be all in front of the cameras, in all the magazines—I’m here
              to take care of business,” he says. “Some people get egos, get the
              big head, but where I come from, we don’t like cameras, we don’t
              like the spotlight. Wale finds his greatest reward in helping
              young talent find their own voice. “At CBM my job is to make the
              best out of an artist,” he says. “They might not know what they
              really have, but I dig in and pull.
            </Text>
          </Bio>
          {/* <BioImg src={man} alt="man in the studio" /> */}
        </Row>
      </Container>
    </Section>
  )
}

export default Biography
