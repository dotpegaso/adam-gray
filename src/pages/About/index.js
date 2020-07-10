import React from 'react'
import {
  Footer
} from '../../components'
import {
  Container,
  Wrapper,
  Content,
  Photo,
  Title,
  Subtitle,
  Text,
  Badge,
  MailWrapper,
  MailText,
  MailLink,
  Navigation,
  NavigationIconWrapper,
  NavigationIcon,
  Uranus,
  Details,
} from './styles'
import IMAGES from '../../constants/images'

const About = () => (
  <Container>
    <Wrapper general>

      <Content>
        <Navigation>
          <NavigationIconWrapper to="/">
            <NavigationIcon src={IMAGES.ARROW_BACK} alt="Arrow back" />
          </NavigationIconWrapper>
          <Text>BACK</Text>
        </Navigation>

        <Details>
          <Title>OH HEY!</Title>
          <Subtitle>Yeah, so a little about me</Subtitle>
          <Text>
            I grew up in the woods of Northern California. I’m the middle child of 3 red headed brothers and got my first slingshot when I was 4 years old. We had a hay bale target range in back that we directed a growing arsenal of projectile weapons at. If we weren’t shooting targets and building forts, we were hiking around the hills or swimming in the lake. We had bows, crossbows, bb guns, 22’s and paint ball guns but the slingshot was tops.
          </Text>

          <Wrapper badges>
            <Badge>MFA from RISD, 2010</Badge>
            <Badge>BA from UCLA, 2007</Badge>
            <Uranus src={IMAGES.URANUS} />
            <Text highlight>Living in San Francisco</Text>
          </Wrapper>

          <MailWrapper>
            <MailText>MAIL TO WORK</MailText>
            <MailLink href="mailto:ok@adam-gray.com" target="_blank">ok@adam-gray.com</MailLink>
          </MailWrapper>
        </Details>
      </Content>

      <Photo src={IMAGES.ADAM_PHOTO} alt="Adam Gray" />
    </Wrapper>
    <Footer />
  </Container>
)

export default About
