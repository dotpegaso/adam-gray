import React from 'react'
import {
  Container,
  ArrowUp,
  ArrowDown,
} from './styles'
import IMAGES from '../../constants/images'

const Controls = ({
  pageUp,
  pageDown
}) => (
  <Container>
    <ArrowUp src={IMAGES.ARROW} onClick={() => pageUp()} />
    {pageDown && <ArrowDown src={IMAGES.ARROW} onClick={() => pageDown()} />}
  </Container>
)

export default Controls
