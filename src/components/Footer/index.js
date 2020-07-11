import React from 'react'
import {
  Container,
  SocialWrapper,
  SocialIconWrapper,
  SocialText,
} from './styles'
import Instagram from '../../resources/images/icon_instagram'
import Play from '../../resources/images/icon_play'
import Email from '../../resources/images/icon_mail'

const Footer = ({
  backgroundColor,
  iconBackgroundColor,
  noPadding,
}) => (
  <Container background={backgroundColor} nopadding={noPadding}>
    <SocialWrapper href="https://instagram.com" target="_blank">
      <SocialIconWrapper background={iconBackgroundColor}>
        <Instagram fill={backgroundColor} />
      </SocialIconWrapper>
      <SocialText color={iconBackgroundColor}>Instagram</SocialText>
    </SocialWrapper>

    <SocialWrapper href="https://youtube.com" target="_blank">
      <SocialIconWrapper background={iconBackgroundColor}>
        <Play fill={backgroundColor} />
      </SocialIconWrapper>
      <SocialText color={iconBackgroundColor}>Youtube</SocialText>
    </SocialWrapper>

    <SocialWrapper href="mailto:ok@adam-gray.com" target="_blank">
      <SocialIconWrapper background={iconBackgroundColor}>
        <Email fill={backgroundColor} />
      </SocialIconWrapper>
      <SocialText color={iconBackgroundColor}>Email</SocialText>
    </SocialWrapper>
  </Container>
)

export default Footer
