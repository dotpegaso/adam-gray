import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import COLORS from '../../constants/colors'

const animation = css`
  opacity: 0;
  animation: fadeIn .3s ease forwards;
  animation-delay: 1.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Container = styled.section``

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
  height: 100px;

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

export const AnimationWrapper = styled.div`
  height: 70%;
  max-width: 75%;
  ${animation}
`

export const DisplayImage = styled.img`
  height: 100%;
  ${props => props.hotfix !== 'BICYCLE BOLTS' && `width: 100%;`}

  ${props => props.animate && (`
    opacity: 0;
    transform: translateY(20px);
    animation: float 4s ease infinite;
    transition: .2s all;
    object-fit: cover;

    @keyframes float {
      0%{
        opacity: 1;
        transform: translateY(20px)
      }
      50% {
        opacity: 1;
        transform: translateY(0)
      }
      100%{
        opacity: 1;
        transform: translateY(20px)
      }
    }
  `)}
`

export const LottieWrapper = styled.div`
  height: 100%;
  width: 100%;
  pointer-events: none;

  ${animation}
`

export const ThreeJSWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  height: fit-content;
  z-index: 0;

  ${animation}
`
