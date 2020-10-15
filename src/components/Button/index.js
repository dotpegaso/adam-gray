import React from 'react'
import {
  CallToAction,
  CallToActionStore,
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
  actionStore,
}) => (
  <CallToActionWrapper
    mobilelanding={mobileLanding}
    mobileproduct={mobileProduct}
  >
    {actionStore ? (
      <CallToActionStore
        href={actionLink}
        target="_blank"
        actionBorderColor={actionBorderColor}
        actionColor={actionColor}
      >
        {actionText}
      </CallToActionStore>
    ) : (
      <CallToAction
        to={actionLink}
        actionBorderColor={actionBorderColor}
        actionColor={actionColor}
      >
        {actionText}
      </CallToAction>
    )}

    <Shadow
      actionBorderColor={actionBorderColor}
      actionShadowColor={actionShadowColor}
      mobilelanding={mobileLanding}
      mobileproduct={mobileProduct}
    />
  </CallToActionWrapper>
)

export default Button
