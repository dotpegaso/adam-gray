import styled from 'styled-components/macro'
import media from 'styled-media-query'
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

  ${props => props.mobileproduct &&
    media.lessThan('small')`
      margin: 0 auto;
    `
  }
  
  ${props => props.mobilelanding && 
    media.lessThan('small')`
      position: absolute;
      bottom: 30px;
      left: 0;
      right: 0;
      margin: 0 auto;
    `
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

  ${props => props.mobilelanding && 
    media.lessThan('small')`
      top: 40px;
      left: 20px;
    `
  }

  ${props => props.mobileproduct &&
    media.lessThan('small')`
      top: 35px;
      left: 10px;
    `
  }
`
