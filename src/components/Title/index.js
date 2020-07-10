import React from 'react'
import {
  TitleWrapper,
  Text,
} from './styles'

const Title = ({
  titleBackground,
  title,
  titleColor,
}) => (
  <TitleWrapper style={{ backgroundImage: `url(${titleBackground})` }}>
    <Text titleColor={titleColor}>{title}</Text>
  </TitleWrapper>
)

export default Title
