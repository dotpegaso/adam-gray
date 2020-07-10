import styled from 'styled-components'
import media from 'styled-media-query'
import COLORS from '../../constants/colors'

export const Intro = styled.div`
  display: flex;
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

  ${media.lessThan("small")`
    font-size: 15vw;
    margin-bottom: 20px;
  `}
`

export const FirstLine = styled.p`
  margin: 0;
  color: ${COLORS.PRIMARY_TEXT};
  letter-spacing: 2px;
  padding-left: 12px;
  margin-top: 10px;
  font-size: 22px;

  ${media.lessThan("small")`
    padding: 0;
  `}
`

export const SecondLine = styled.p`
  margin: 0;
  letter-spacing: 2px;
  padding-left: 12px;
  color: ${COLORS.SECONDARY_TEXT};
  font-size: 22px;

  ${media.lessThan("small")`
    padding: 0;
  `}
`
