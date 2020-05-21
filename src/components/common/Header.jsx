import styled from 'styled-components'
import React, { useState } from 'react'

import logo from '../../images/logo.png'
import { Container, Row } from '../common/Grid'
import { Link } from 'react-router-dom'

import icon from '../../images/list.svg'

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

  @media (max-width: 600px) {
    display: none;
  }
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

const Toggler = styled.img`
  display: none;
  max-width: 50px;

  @media (max-width: 600px) {
    display: block;
  }
`

const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  display: none;
  width: 100vw;
  transition: 0.5s;

  @media (max-width: 600px) {
    display: block;
  }
`

const MobileItem = styled(MenuItem)`
  padding: 2rem 1rem;
  width: 100%;
  margin: 0 auto;

  &:first-of-type {
    padding-top: 5rem;
  }

  &:last-of-type {
    border-bottom: none;
  }
`

function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Wrapper>
      <Container>
        <Content>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <Menu>
            <MenuItem to="/artists">Artists</MenuItem>
            <MenuItem to="/store">Store</MenuItem>
            <MenuItem to="/news">News</MenuItem>
            <MenuItem to="/lifestyle">Lifestyle</MenuItem>
          </Menu>
          <Toggler onClick={() => setShowMenu(!showMenu)} src={icon} />
        </Content>
      </Container>
      {showMenu && (
        <MobileMenu id="mobile">
          <MobileItem onClick={() => setShowMenu(false)} to="/artists">
            Artists
          </MobileItem>
          <MobileItem onClick={() => setShowMenu(false)} to="/store">
            Store
          </MobileItem>
          <MobileItem onClick={() => setShowMenu(false)} to="/news">
            News
          </MobileItem>
          <MobileItem onClick={() => setShowMenu(false)} to="/lifestyle">
            Lifestyle
          </MobileItem>
        </MobileMenu>
      )}
    </Wrapper>
  )
}

export default Header
