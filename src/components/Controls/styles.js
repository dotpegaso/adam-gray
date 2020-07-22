import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import COLORS from '../../constants/colors'

const defaultArrow = css`
  background-color: ${COLORS.LIGHTER};
  padding: 10px;
  width: 20px;
  height: 20px;
  margin: 10px 0;
  object-fit: contain;

  &:hover {
    background-color: ${COLORS.LIGHTER};
    cursor: pointer;
    filter: invert(1) hue-rotate(0deg) brightness(5) sepia(2) contrast(5);
  }
`

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 40px;
  right: 40px;
  padding: 10px 50px;
  background: ${COLORS.LIGHTER};
  box-shadow: 0 0 20px rgba(0,0,0, .1);

  ${media.lessThan("small")`
    display: none;
  `}
`

export const ArrowUp = styled.img`
  transform: rotate(-180deg);
  ${defaultArrow}
`

export const ArrowDown = styled.img`
  ${defaultArrow}
`
