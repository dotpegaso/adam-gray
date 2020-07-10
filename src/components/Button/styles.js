import styled from 'styled-components'
import { Link } from 'react-router-dom'
import COLORS from '../../constants/colors'


export const CallToActionWrapper = styled.div`
  position: relative;
  width: fit-content;

  &:hover {
    cursor: pointer;
    
    a {
      transform: translate(-10px, -10px);
    }
  }
`

export const CallToAction = styled(Link)`
  display: block;
  text-decoration: none;
  border: 3px solid ${props => props.actionBorderColor};
  color: ${props => props.actionColor};
  margin-top: 25px;
  background: ${COLORS.LIGHTER};
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 500;
  width: 135px;
  height: 25px;
  z-index: 2;
  position: relative;
  transition: .2s all;
  text-align: center;
`

export const Shadow = styled.div`
  position: absolute;
  background: ${props => props.actionShadowColor};
  width: calc(200px - 6px);
  height: calc(50px - 6px);
  top: 0;
  z-index: 1;
  pointer-events: none;
  display: flex;
  justify-content: space-between;
  border: 3px solid ${props => props.actionBorderColor};
`
