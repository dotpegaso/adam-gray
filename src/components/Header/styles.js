import styled from 'styled-components'
import { Link } from 'react-router-dom'
import COLORS from '../../constants/colors'

export const Container = styled.div`
  width: calc(100% - 80px);
  position: fixed;
  display: flex;
  align-items: center;
  background: ${props => props.active ? '#FFF' : COLORS.PRIMARY};
  padding: 5px 40px;
  height: 80px;
  justify-content: space-between;
  z-index: 9;
  transition: .2s all;
  ${props => props.active && `box-shadow: 0 1px 15px rgba(0,0,0, .1);`}
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 3px;
  color: ${COLORS.PRIMARY_TEXT};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  height: 100%;
`

export const SocialIcon = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 40px;
`

export const BackToHome = styled(Link)`
  height: 95%;
`