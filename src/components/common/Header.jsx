import styled from 'styled-components'
import React from 'react'

import logo from '../../images/logo.png'
import { Container, Row } from '../common/Grid'
import { Link } from 'react-router-dom'

const Wrapper = styled.header`
  width: 100%;
  /* height: 100px; */
  background-color: #000;
  position: fixed;
  z-index: 10;
  padding: 1rem 0;
`

const Content = styled(Row)`
  justify-content: space-between;
`

const Logo = styled.img`
  max-width: 120px;
`

const Menu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuItem = styled(Link)`
  display: block;
  color: #fff;
  border-bottom: 1px solid #ffdb61;
  padding-bottom: 0.5rem;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 1rem;
  font-weight: 600;
`

function Header() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Logo src={logo} alt="logo" />
          <Menu>
            <MenuItem to="/artists">Artists</MenuItem>
            <MenuItem to="/store">Store</MenuItem>
            <MenuItem to="/">News</MenuItem>
            <MenuItem to="/lifestyle">Lifestyle</MenuItem>
          </Menu>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Header
