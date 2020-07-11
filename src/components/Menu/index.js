import React from 'react'
import {
  Container,
  Content,
  StyledLink,
  LabelWrapper,
  Dot,
  Close,
} from './styles'
import Footer from '../Footer'
import IMAGES from '../../constants/images'
import COLORS from '../../constants/colors'

const menuItems = [
  {label: 'About', url: '/about', align: 'end'},
  {label: 'Hella Slingshots', url: '/hella-slingshots', align: 'start'},
  {label: 'Bicycle Bolt', url: '/bicycle-bolts', align: 'end'},
  {label: 'Surf Brain', url: '/surf-brain', align: 'start'},
  {label: 'Hella More Funner', url: '/hella-more-funner', align: 'end'},
  {label: 'Intrmodl', url: '/intrmodl', align: 'start'},
]

const Menu = ({ active, callback }) => (
  <>
    {active && (
      <Container>
        <Close
          src={IMAGES.ICON_CLOSE}
          alt="Close"
          onClick={() => callback(false)}
        />
        <Content>
          {menuItems.map( item => (
            <StyledLink
              to={item.url}
              flexdirection={item.align}
              onClick={() => callback(false)}
            >
              <LabelWrapper>
                <Dot />
                {item.label}
              </LabelWrapper>
            </StyledLink>
          ))}
        </Content>
        <Footer
          backgroundColor={COLORS.SECONDARY}
          iconBackgroundColor={COLORS.PRIMARY}
          noPadding
        />
      </Container>
    )}
  </>
)

export default Menu
