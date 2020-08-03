import React, { useEffect } from 'react'
import Hero from '../components/common/Hero'
import styled from 'styled-components'

import city from '../images/banners/CITY-GIRLS-WEBSITE-BANNER.jpg'
import lilbaby from '../images/blogs/lilbaby.png'
import crouch from '../images/blogs/crouch.jpg'
import migos from '../images/blogs/migos.png'
import diana from '../images/blogs/diana.jpg'
import cardib from '../images/blogs/cardib.jpg'

const NewsBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    &:nth-child(even) {
      flex-direction: column;
    }
  }
`

const Image = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Info = styled.div`
  width: 50%;
  padding: 5rem;

  @media (max-width: 768px) {
    width: 100%;
  }

  h3 {
    color: #ffdb61;
    font-weight: 100;
    font-size: 5rem;

    @media (max-width: 1024px) {
      font-size: 3.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2.5rem;
    }
  }

  p {
    margin: 1rem 0;
    font-size: 2rem;
    font-weight: 100;
    line-height: 2.5rem;

    @media (max-width: 1024px) {
      font-size: 1.6rem;
    }
  }
`

function News() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero image={city} line1="News" line2="Updates" />
      <NewsBox>
        <Image src={lilbaby} />
        <Info>
          <h3 className="title">
            Lil Baby Announces "The New Generation" Tour
          </h3>
          <p>
            Lil Baby hits the road again for another much anticipated tour, The
            New Generation, not more than six months after his last Harder Than
            Ever Tour wrapped up.
          </p>
        </Info>
      </NewsBox>
      <NewsBox>
        <Image src={migos} />
        <Info>
          <h3 className="title">
            Migos brings fresh drip to the finish line campaign
          </h3>
          <p>
            Rap trio Migos premiered the new ad campaign for their endorsement
            with sneaker brand Finish Line today on Instagram. The group is
            featured in a tricked-out ice cream truck that peruses the
            neighborhood like the local ice cream man, but instead of passing
            out frozen treats, they are giving out sneakers from Nike, Adidas,
            and Under Armor. The commercial also features basketball player Josh
            Jackson.
          </p>
        </Info>
      </NewsBox>
      <NewsBox>
        <Image src={cardib} />
        <Info>
          <h3 className="title">
            Offset and Cardi B pose on the cover of the Rolling Stone
          </h3>
          <p>
            The July issue of the coveted Rolling Stone cover is adorned with a
            very pregnant Cardi B and fiancé Offset. Cardi B took to Instagram
            to explain that the cover was leaked and was originally supposed to
            appear in grey, but this perfectly-shot cover radiates all the love
            between their little family just as well in color.
          </p>
        </Info>
      </NewsBox>
      <NewsBox>
        <Image src={diana} />
        <Info>
          <h3 className="title">
            Diana Ross Dazzles The American Music Awards Red Carpet
          </h3>
          <p>
            Legendary singer Diana Ross twirled around the red carpet at the
            American Music Awards before receiving the Lifetime Achievement
            Award in an all black ensemble, complete with an extravagant
            headpiece and tulle train.
          </p>
        </Info>
      </NewsBox>
      <NewsBox>
        <Image src={crouch} />
        <Info>
          <h3 className="title">Migos covers wonderland magazine</h3>
          <p>
            Hip-hop trio Migos covers Wonderland Magazine for their summer
            issue. The group joins other artists for Wonderland’s summer 2018
            spread, including Amandla Stenberg, Saweetie, and Shawn Mendes.
            Pre-order your copy here.
          </p>
        </Info>
      </NewsBox>
    </>
  )
}

export { News }
