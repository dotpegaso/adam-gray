import React, { useState } from 'react'
import {
  Container,
  StyledLink,
  Wrapper,
  SocialIcon,
  Logo,
  BackToHome,
  MenuIcon,
} from './styles'
import Menu from '../Menu'
import IMAGES from '../../constants/images'

const Header = ({ active }) => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  return (
    <>
      <Container active={active}>
        {active && (
          <BackToHome to="/">
            <Logo src={IMAGES.TINY_LOGO} alt="Adam's Gray logo" />
          </BackToHome>
        )}
        {!active && <StyledLink to="/about">ABOUT</StyledLink>}
        <Wrapper>
          {active && (
            <>
              <a
                href="https://instagram.com/ok_adam_gray"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon src={IMAGES.INSTRAGRAM} />
              </a>
              <a href="#zbwid-9005728d">
                <SocialIcon src={IMAGES.EMAIL} />
              </a>
            </>
          )}
          <MenuIcon
            src={IMAGES.ICON_MENU}
            alt="Menu"
            onClick={() => setIsMenuActive(!isMenuActive)}
          />
        </Wrapper>
      </Container>
      <Menu active={isMenuActive} callback={setIsMenuActive} />
    </>
  )
}

export default Header
