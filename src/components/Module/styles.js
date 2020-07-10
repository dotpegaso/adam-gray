import styled from 'styled-components'
import media from 'styled-media-query'
import COLORS from '../../constants/colors'

export const Container = styled.section`
  
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Details = styled.div`
  width: 50%;
  padding-left: 60px;
  margin-top: 80px;

  ${media.lessThan('small')`
    width: 80%;
    padding: 0;
    margin: 0 auto;
  `}
`

export const Description = styled.p`
  color: ${props => props.descriptionColor};
  padding: 0;
  font-size: 20px;
  max-width: 90%;
  margin: 0 0 80px;

  ${media.lessThan('small')`
    font-size: 16px;
    margin: 0 0 40px;
  `}
`

export const Icon = styled.img`
  margin-bottom: 20px;
  max-height: 150px;

  ${media.lessThan('small')`
    width: 40%
    margin: 40px 0;
  `}
`

export const Display = styled.div`
  width: 50%;
  padding-left: 60px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 100%;
  background-color: ${COLORS.MODULE_BACKGROUND};

  ${media.lessThan('small')`
    background-position-y: 300px;
    background-position-x: -100px;
  `}
  
  ${media.lessThan("small")`
    display: none;
  `}
`

export const DisplayImage = styled.img`
  height: 70%;
  max-width: 75%;
`
