import styled from 'styled-components'
import media from 'styled-media-query'
import COLORS from '../../constants/colors'

export const Container = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  padding: 30px 0;
  background-color: ${COLORS.ABOUT_SUPPORT};

  ${media.greaterThan('1600px')`
    padding: 0;
  `}

  ${media.lessThan('small')`
    flex-wrap: wrap;
    flex-direction: column;
  `}
`

export const SocialWrapper = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 0 20px;

  ${media.lessThan('small')`
    margin: 20px;
  `}
`

export const SocialIconWrapper = styled.div`
  background-color: ${COLORS.ABOUT_SECONDARY};
  padding: 15px;
  display: flex;
  align-items: center;
`

export const SocialIcon = styled.img`
  height: 25px;
  width: 25px;
  object-fit: contain;
`

export const SocialText = styled.p`
  margin: 0;
  color: ${COLORS.ABOUT_SECONDARY};
  margin-left: 20px;
  font-weight: 600;
  font-size: 18px;
`
