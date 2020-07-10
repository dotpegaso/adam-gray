import React from 'react'
import Lottie from "react-lottie"
import Button from '../Button'
import Title from '../Title'
import ThreeModel from '../ThreeModel'
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
  AnimationWrapper,
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

          <Description descriptionColor={descriptionColor}>{description}</Description>

          {icon && <Icon src={icon} alt={title} />}

          <Button
            actionLink={actionLink}
            actionBorderColor={actionBorderColor}
            actionColor={actionColor}
            actionText={actionText}
            actionShadowColor={actionShadowColor}
          />
        </Details>

        <Display style={{ backgroundImage: `url(${displayBackground})` }}>
          {displayImage && (
            <AnimationWrapper>
              <DisplayImage
                src={displayImage}
                alt="display"
                animate={animate}
                hotfix={title}
              />
            </AnimationWrapper>
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
    </Container>
  )
}
export default Module
