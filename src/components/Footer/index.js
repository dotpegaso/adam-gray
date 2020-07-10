import React from 'react'
import {
  Container,
  SocialWrapper,
  SocialIconWrapper,
  SocialIcon,
  SocialText,
} from './styles'
import IMAGES from '../../constants/images'

const Footer = () => (
  <Container>
    <SocialWrapper href="https://instagram.com" target="_blank">
      <SocialIconWrapper>
        <SocialIcon src={IMAGES.INSTRAGRAM} alt="Instagram" />
      </SocialIconWrapper>
      <SocialText>Instagram</SocialText>
    </SocialWrapper>

    <SocialWrapper href="https://youtube.com" target="_blank">
      <SocialIconWrapper>
        <SocialIcon src={IMAGES.PLAY} alt="Youtube" />
      </SocialIconWrapper>
      <SocialText>Youtube</SocialText>
    </SocialWrapper>

    <SocialWrapper href="mailto:ok@adam-gray.com" target="_blank">
      <SocialIconWrapper>
        <SocialIcon src={IMAGES.EMAIL} alt="Email" />
      </SocialIconWrapper>
      <SocialText>Email</SocialText>
    </SocialWrapper>
  </Container>
)

export default Footer
