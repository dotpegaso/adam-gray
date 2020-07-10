import React, { useState } from 'react'
import {
  Container,
  Span,
} from './styles'

const Hamburger = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container
      open={isOpen}
      active={active}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Span />
      <Span />
      <Span />
    </Container>
  )
}

export default Hamburger
