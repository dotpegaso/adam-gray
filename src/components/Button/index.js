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
  mobileLanding,
  mobileProduct,
}) => (
  <CallToActionWrapper
    mobilelanding={mobileLanding}
    mobileproduct={mobileProduct}
  >
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
      mobilelanding={mobileLanding}
      mobileproduct={mobileProduct}
    />
  </CallToActionWrapper>
)

export default Button
