import React from 'react'
import Button from '../Button'
import Title from '../Title'
import {
  Container,
  Content,
  Details,
  Description,
  Icon,
  Display,
  DisplayImage,
} from './styles'

const Module = ({
  id,
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
}) => (
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
        {displayImage && <DisplayImage src={displayImage} alt="display" />}
      </Display>

    </Content>
  </Container>
)
export default Module
