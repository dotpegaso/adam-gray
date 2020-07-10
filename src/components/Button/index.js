import React from 'react'
import {
  CallToAction,
  CallToActionWrapper,
  Shadow,
} from './styles'

const Button = ({
  actionLink,
  actionBorderColor,
  actionColor,
  actionText,
  actionShadowColor,
}) => (
  <CallToActionWrapper>
    <CallToAction
      to={actionLink}
      actionBorderColor={actionBorderColor}
      actionColor={actionColor}
    >
      {actionText}
    </CallToAction>
    <Shadow
      actionBorderColor={actionBorderColor}
      actionShadowColor={actionShadowColor}
    />
  </CallToActionWrapper>
)

export default Button
