import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import media from 'styled-media-query'
import COLORS from '../../constants/colors'

export const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${COLORS.PRIMARY};
  z-index: 99;
  overflow: hidden;

  ${media.lessThan("small")`
    height: 100%;
  `}
`

export const Content = styled.div`
  height: calc(80% - 200px);
  padding: 100px;
  margin: 0 auto;
  width: 30%;
  display: flex;
  flex-wrap: wrap;

  ${media.lessThan("small")`
    padding: 20% 0;
    padding: 0;
    align-content: center;
    height: 80%;
    width: 80%;
  `}
`

export const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => `flex-${props.flexdirection}`};
  text-decoration: none;
  font-size: 2vw;
  color: ${COLORS.LIGHTER};
  transition: .2s all;
  font-weight: 600;
  position: relative;

  &:hover {
    color: ${COLORS.ABOUT_SECONDARY}
  }

  ${media.lessThan("small")`
    font-size: 22px;
    height: fit-content;
  `}
`

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;

  ${media.lessThan("small")`
    padding: 10px 0 ;
  `}
`

export const Dot = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${COLORS.ABOUT_SECONDARY};
  border-radius: 50%;
  margin-right: 10px;

  ${media.lessThan("small")`
    display: none;
  `}  
`

export const Close = styled.img`
  position: absolute;
  top: 20px;
  right: 40px;
  margin-top: 2px;
  width: 50px;
  object-fit: contain;
  height: 50px;

  &:hover {
    cursor: pointer;
  }
`
