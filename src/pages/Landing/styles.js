import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import COLORS from '../../constants/colors'

const animation = css`
  @keyframes showsUp {
    0% {
      opacity: 0;
      transform: translateY(45px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const Intro = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
  background-color: ${COLORS.PRIMARY};
`

export const Image = styled.img`
  width: 40vw;
`

export const Content = styled.div`
  display: flex;
  width: 75%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  ${media.lessThan("small")`
    flex-wrap: wrap;
    width: 100%;
  `}
`

export const Wrapper = styled.div`
  text-align: left;

  ${media.lessThan("small")`
    text-align: center;
    width: 100%;
    margin-top: 25px;
  `}
`

export const Title = styled.h1`
  font-weight: 400;
  font-size: 7vw;
  color: ${COLORS.SECONDARY_TEXT};
  margin: 0;
  line-height: 5vw;
  animation: showsUp .2s ease forwards;
  animation-delay: .8s;
  opacity: 0;
  transition: .2s all;

  ${media.lessThan("small")`
    font-size: 15vw;
    margin-bottom: 20px;
  `}

  ${animation}
`

export const FirstLine = styled.p`
  margin: 0;
  color: ${COLORS.PRIMARY_TEXT};
  letter-spacing: 2px;
  padding-left: 12px;
  margin-top: 10px;
  font-size: 22px;
  animation: showsUp .2s ease forwards;
  animation-delay: 1s;
  opacity: 0;
  transition: .2s all;

  ${media.lessThan("small")`
    padding: 0;
  `}

  ${animation}

  ::after {
    content: '';
    display: block;
    position: absolute;
    width: 15%;
    height: 2px;
    background: ${COLORS.SECONDARY_TEXT};
    right: 0;
    top: 15px;
    margin-right: 25%;

    ${media.lessThan("small")`
      display: none;
    `}
  }
`

export const SecondLine = styled.p`
  margin: 0;
  letter-spacing: 2px;
  padding-left: 12px;
  color: ${COLORS.SECONDARY_TEXT};
  font-size: 22px;
  animation: showsUp .2s ease forwards;
  animation-delay: 1.2s;
  opacity: 0;
  transition: .2s all;

  ${media.lessThan("small")`
    padding: 0;
  `}

  ${animation}
`

export const StartControl = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  position: absolute;
  bottom: 40px;
  right: 40px;
  animation: showsUp .2s ease forwards;
  animation-delay: 1.6s;
  opacity: 0;
  transition: .2s all;

  ${animation}

  &:hover {
    cursor: pointer;
  }
`

export const Arrow = styled.img`
  padding: 10px;
  width: 18px;
  height: 15px;
  background: #FFF;
  object-fit: contain;
  margin-left: 20px;
`
