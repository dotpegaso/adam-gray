import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  ${media.lessThan('small')`
    padding-top: 100px;
  `}
`

export const VideoContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.videoBackground};

  ${media.lessThan('small')`
    height: 30vh;
  `}
`

export const VideoWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 50%;

  ${media.lessThan('small')`
    width: 100%;
    height: 100%;
  `}
`

export const VideoText = styled.p`
  color: ${props => props.videoTextColor};
  position: absolute;
  font-size: 5vw;
  top: -145px;
  z-index: 1;
  left: -70px;

  ${media.lessThan('small')`
    display: none;
  `}
`

export const Embed = styled.div`
  margin: 0 auto;
  height: 100%;
  z-index: 2;
  position: relative;
`

export const SmallCallToAction = styled.a`
  text-decoration: none;
  display: block;
  width: 100%;
  padding: 20px 0;
  background-color: ${props => props.smallActionBackground};
`

export const ProductsContainer = styled.div`
  padding: 40px;

  ${media.lessThan('small')`
    padding: 10px;
  `}
`

export const ProductsTitle = styled.p`
  font-size: 3vw;
  color: ${props => props.color};
  margin: 30px 0 30px 30px;
  position: relative;
  width: fit-content;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    height: 50%;
    display: block;
    width: 85%;
    background: ${props => props.backgroundColor};
    z-index: -1;
    left: -10px;
  }

  ${media.lessThan('small')`
    font-size: 6vw;
  `}

`

export const ProductsWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`

export const ProductsItem = styled.img`
  height: 12vw;
  margin: 30px 0;
  width: calc(100% / 4);
  object-fit: contain;

  ${media.lessThan('small')`
    height: 20vw;
  `}
`

export const BiggerCallToAction = styled.a`
  text-decoration: none;
  display: block;
  width: 100%;
  padding: 40px 0;
  background-color: ${props => props.biggerActionBackground};
  background-image: url(${props => props.biggerActionBackgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const ShadowText = styled.p`
  display: block;  
  width: fit-content;
  margin: 0 auto;
  font-weight: 400;
  
  ${props => props.small && (`
    color: ${props.smallActionTextColor};
    font-size: 32px;
    padding: 5px 10%;
    border: 6px solid;
    text-shadow: 3px 3px rgba(255,255,255, .8);
  `)}

  ${props => props.bigger && (`
    color: ${props.biggerActionTextColor};
    font-size: 7vw;
    width: 40%;
    margin: 0 auto;
    padding: 10px 20px;
    text-align: center;
    border 12px solid;
    text-shadow: 10px 10px rgba(255,255,255, .8);
    background-color: ${props.biggerActionInnerBackground};
  `)}

  ${media.lessThan('small')`
    ${props => props.bigger && `
      font-size: 12vw;
      width: 70%;
      text-shadow: 4px 4px rgba(255,255,255,.8);
    `}

    ${props => props.small && `
      width: 60%;
      font-size: 7vw;
      text-align: center;
      text-shadow: 2px 2px rgba(255,255,255, .8);
    `}
  `}
`
