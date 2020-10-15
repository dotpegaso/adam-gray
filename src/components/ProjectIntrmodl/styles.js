import styled from 'styled-components/macro'
import media from 'styled-media-query'
import COLORS from '../../constants/colors'

export const Container = styled.div`
  padding: 40px;
  padding-bottom: 100px;

  ${media.lessThan('small')`
    padding: 10px;
  `}
`

export const Title = styled.p`
  font-size: 3vw;
  color: ${COLORS.INTRMODL_SECONDARY};
  margin: 30px 0 30px 30px;
  position: relative;
  width: fit-content;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    height: 50%;
    display: block;
    width: 85%;
    background: ${COLORS.INTRMODL_PRIMARY};
    z-index: -1;
    left: -10px;
  }

  ${media.lessThan('small')`
    font-size: 8vw;
  `}
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 100px 0;

  ${media.lessThan('small')`
    flex-wrap: wrap;

    :last-child {
      flex-flow: column-reverse;
    }
  `}
`
export const Wrapper = styled.div`
  width: 30%;

  ${media.lessThan('small')`
    width: 90%;
    margin: 0 auto;
  `}
`

export const ContentTitle = styled.p`
  margin: 0;
  font-size: 18px;
  margin-bottom: 20px;
  color: ${COLORS.INTRMODL_SECONDARY};

  ${media.lessThan('small')`
    font-size: 6vw;
  `}
`

export const ContentDescription = styled.p`
  margin: 0;
  color: ${COLORS.INTRMODL_PRIMARY};
`

export const ContentPreview = styled.img`
  height: ${(props) => (props.small ? '40vh' : '50vh')};
  object-fit: contain;

  ${media.lessThan('small')`
    width: 90%;
    ${(props) => !props.small && `margin-top: 50px;`}
  `}
`
