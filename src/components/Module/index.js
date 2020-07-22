import React from 'react'
import Lottie from "react-lottie"
import Button from '../Button'
import Title from '../Title'
import ThreeModel from '../ThreeModel'
import Controls from '../Controls'
import {
  Container,
  Content,
  Details,
  Description,
  Icon,
  Display,
  DisplayImage,
  LottieWrapper,
  ThreeJSWrapper,
} from './styles'

const Module = ({
  id,
  lottieIcon,
  threeModelIcon,
  title,
  titleBackground,
  titleColor,
  description,
  descriptionColor,
  icon,
  actionText,
  actionBorderColor,
  actionColor,
  actionLink,
  actionShadowColor,
  displayBackground,
  displayImage,
  animate,
  pageUp,
  pageDown,
  showControl,
  mobileLanding,
  mobileProduct,
}) => {

  const lottieDefaultOptions = {
    autoplay: true,
    animationData: lottieIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    }
  }

  return (
    <Container id={id} className="section">
      <Content>

        <Details>
          <Title
            titleBackground={titleBackground}
            titleColor={titleColor}
            title={title}
          />

          <Description
            descriptionColor={descriptionColor}
            mobileproduct={mobileProduct}
          >
            {description}
          </Description>

          {icon && <Icon src={icon} alt={title} />}

          <Button
            actionLink={actionLink}
            actionBorderColor={actionBorderColor}
            actionColor={actionColor}
            actionText={actionText}
            actionShadowColor={actionShadowColor}
            mobileLanding={mobileLanding}
            mobileProduct={mobileProduct}
          />
        </Details>

        <Display
          style={{ background: mobileProduct ? actionShadowColor :`url(${displayBackground})` }}
          mobileproduct={mobileProduct}
        >
          {displayImage && (
            <DisplayImage
              src={displayImage}
              alt="display"
              animate={animate}
            />
          )}
          {lottieIcon && (
            <LottieWrapper>
              <Lottie options={lottieDefaultOptions} />
            </LottieWrapper>
          )}
          {threeModelIcon && (
            <ThreeJSWrapper>
              <ThreeModel
                id="three-js-model"
                model={threeModelIcon}
                width={window.innerWidth}
                height="650"
              />
            </ThreeJSWrapper>
          )}
        </Display>

      </Content>
      {showControl && <Controls pageUp={pageUp} pageDown={pageDown} />}
    </Container>
  )
}
export default Module
