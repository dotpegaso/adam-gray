import React from 'react'
import {
  Container,
  StyledLink,
  Wrapper,
  SocialIcon,
  Logo,
  BackToHome,
} from './styles'
import Hamburger from '../Hamburger'
import IMAGES from '../../constants/images'

const Header = ({ active }) => (
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
          <SocialIcon src={IMAGES.INSTRAGRAM} />
          <SocialIcon src={IMAGES.EMAIL} />
        </>
      )}
      <Hamburger active={active} />
    </Wrapper>
  </Container>
)

export default Header
