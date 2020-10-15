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
  youtubeChannel,
}) => (
  <Container background={backgroundColor} nopadding={noPadding}>
    <SocialWrapper
      href="https://www.instagram.com/ok_adam_gray"
      target="_blank"
    >
      <SocialIconWrapper background={iconBackgroundColor}>
        <Instagram fill={backgroundColor} />
      </SocialIconWrapper>
      <SocialText color={iconBackgroundColor}>Instagram</SocialText>
    </SocialWrapper>
    {youtubeChannel && (
      <SocialWrapper href={youtubeChannel} target="_blank">
        <SocialIconWrapper background={iconBackgroundColor} play>
          <Play fill={backgroundColor} />
        </SocialIconWrapper>
        <SocialText color={iconBackgroundColor}>Youtube</SocialText>
      </SocialWrapper>
    )}
    <SocialWrapper href="#zbwid-9005728d">
      <SocialIconWrapper background={iconBackgroundColor}>
        <Email fill={backgroundColor} />
      </SocialIconWrapper>
      <SocialText color={iconBackgroundColor}>Email</SocialText>
    </SocialWrapper>
  </Container>
)

export default Footer
