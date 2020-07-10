import styled from 'styled-components'
import media from 'styled-media-query'

export const TitleWrapper = styled.div`
  background-repeat: no-repeat;
  margin-bottom: 20px;
  background-position-x: 30px;
  background-position-y: 20px;
`

export const Text = styled.h1`
  font-weight: 500;
  font-size: 4vw;
  margin: 0;
  color: ${props => props.titleColor};
  padding: 0;
  transform: translateY(-20px);

  ${media.lessThan('small')`
    font-size: 28px;
    transform: translateY(0px);
  `}
`
