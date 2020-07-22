import styled from 'styled-components/macro'
import COLORS from '../../constants/colors'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  cursor: pointer;
  width: 25px;
  height: 25px;
  transform: rotate(90deg);
  transition: all ease .2s;
  ${props => props.active && `filter: invert(1);`}

  &:hover {
    span:last-child {
      height: 20px;
			background-color: ${COLORS.DEFAULT_LINE};
    }

    span:first-child {
      height: 10px;
			background-color: ${COLORS.DEFAULT_LINE};
    }
  }

  & span {
    &:first-child {
      right: 0px;
    }
    
    &:last-child {
      background-color: ${COLORS.DEFAULT_LINE};
      height: 10px;
      right: 0px;

      &:hover {
        height: 20px;
			  background-color: ${COLORS.DEFAULT_LINE};
      }
    }
  }

  ${props => props.open && (
    `
      transform: rotate(0deg);
      position: relative;
      
      & span {
        opacity: 0;

        &:first-child {
          background-color: ${COLORS.DEFAULT_LINE};
          transform: rotate(-45deg);
          right: -8px;
          opacity: 1;
        }

        &:last-child {
          background-color: ${COLORS.DEFAULT_LINE};
          height: 20px;
          transform: rotate(45deg);
          right: 8px;
          opacity: 1;
        }
      }

      &:hover {
        span:first-child {
          height: 20px;
				  background-color: ${COLORS.DEFAULT_LINE};
        }
      }
    `
  )}
`

export const Span = styled.span`
  width: 2px;
  height: 20px;
  background: ${COLORS.DEFAULT_LINE};
  display: block;
  margin-right: 6px;
  position: relative;
  transition: all ease .2s;
`
