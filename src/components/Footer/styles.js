import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  padding: ${props => props.nopadding ? '0' : '30px 0'};
  background-color: ${props => props.background};

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
  background-color: ${props => props.background};
  padding: 15px;
  display: flex;
  align-items: center;
`

export const SocialText = styled.p`
  margin: 0;
  color: ${props => props.color};
  margin-left: 20px;
  font-weight: 600;
  font-size: 18px;
`
