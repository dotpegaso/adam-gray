import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'
import IMAGES from '../../constants/images'
import COLORS from '../../constants/colors'

export const Container = styled.section`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: ${COLORS.ABOUT_SUPPORT};

  ${media.greaterThan('1600px')`
    height: 100vh;
  `}
`

export const Wrapper = styled.div`
  display: flex;
  ${props => props.general && `
    height: 80%;
  `}

  ${props => props.badges && `
    margin: 40px 0;
    align-items: center;
    justify-content: space-between;

    ${media.lessThan('small')`
      flex-wrap: wrap;
    `}
  `}

  ${media.lessThan('small')`
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  `}
`

export const Content = styled.div`
  width: 65%;
  background-color: ${COLORS.ABOUT_PRIMARY};
  background-image: url(${IMAGES.ABOUT_BACKGROUND});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px;

  ${media.lessThan('small')`
    width: 100%;
    padding: 0;
    background-position: left;
  `}
`

export const Details = styled.div`
  width: 80%;
  margin: 0 4vw 0 auto;

  ${media.greaterThan('1600px')`
    width: 70%;
    margin: 0 auto;
  `}

  ${media.lessThan('small')`
    margin: 0 auto;
    text-align: center;
  `}
`

export const Navigation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
`

export const NavigationIconWrapper = styled(Link)`
  background: ${COLORS.LIGHTER};
  padding: 10px;
  margin-right: 20px;
  display: flex;
  align-items: center;
`

export const NavigationIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 auto;
  transform: rotate(90deg);
`

export const Photo = styled.img`
  width: 35%;
  object-fit: cover;

  // safari trick
  &:not(:root:root) {
    height: 100%;
  }

  ${media.lessThan('small')`
    width: 100%;
  `}
`

export const Title = styled.h1`
  font-weight: 500;
  color: ${COLORS.ABOUT_SUPPORT};
  font-size: 48px;
  margin: 0;
`

export const Subtitle = styled.p`
  margin: 0;
  color: ${COLORS.ABOUT_SECONDARY};
  font-size: 22px;
  margin-bottom: 20px;
`

export const Text = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 34px;
  width: 80%;
  color: ${COLORS.LIGHTER};
  ${props => props.highlight && `
    color: ${COLORS.ABOUT_SECONDARY};
    width: fit-content;
    font-size: 1.1.vw;
  `}

  ${media.lessThan('small')`
    width: 100%;
  `}
`

export const Badge = styled.div`
  border: 3px solid ${COLORS.ABOUT_SUPPORT};
  color: ${COLORS.ABOUT_SECONDARY};
  padding: 10px;
  font-size: 1.1vw;

  ${media.lessThan('small')`
    width: 100%;
    font-size: 5vw;
    margin: 20px 0;
  `}
`

export const MailWrapper = styled.div`
  border: 3px solid ${COLORS.ABOUT_SUPPORT};
  background-color: ${COLORS.ABOUT_SECONDARY};
  color: ${COLORS.ABOUT_SUPPORT};
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;

  ${media.lessThan('small')`
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto 50px;
  `}
`

export const MailText = styled.p`
  font-size: 32px;
  margin: 0 40px 0 0;

  ${media.lessThan('small')`
    font-size: 24px;
    margin: 0 auto;
  `}
`

export const MailLink = styled.a`
  text-decoration: none;
  display: block;
  padding: 10px 20px;
  background-color: ${COLORS.ABOUT_SUPPORT};
  color: ${COLORS.LIGHTER};
  text-align: center;

  ${media.lessThan('small')`
    margin: 0 auto;
  `}
`

export const Uranus = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
`
