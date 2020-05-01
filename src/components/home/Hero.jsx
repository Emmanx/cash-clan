import React from 'react';
import styled from 'styled-components';

import hero from '../../images/studio.jpg';
import { Container, Row } from '../common/Grid';

const Banner = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(206, 152, 41, 0.3), rgba(206, 152, 41, 0.3)),
    url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Content = styled(Row)`
  height: 100%;
  align-items: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 12rem;
  font-weight: 600;
`;

function Hero() {
  return (
    <>
      <Banner>
        <Container>
          <Content>
            <Title>
              Cash Clan <br /> Music
            </Title>
          </Content>
        </Container>
      </Banner>
    </>
  );
}

export default Hero;
