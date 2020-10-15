import React from 'react'
import Zoom from 'react-medium-image-zoom'
import Module from '../Module'
import Header from '../Header'
import Gallery from '../Gallery'
import Footer from '../Footer'
import ProjectIntrmodl from '../ProjectIntrmodl'
import 'react-medium-image-zoom/dist/styles.css'

import {
  Container,
  VideoContainer,
  VideoWrapper,
  VideoText,
  Embed,
  ProductsContainer,
  ProductsTitle,
  ProductsWrapper,
  ProductsItem,
  SmallCallToAction,
  BiggerCallToAction,
  ShadowText,
} from './styles'

const zoomStyle = {
  height: '12vw',
  margin: '30px 0',
  width: 'calc(100% / 4)',
}

const Product = ({
  title,
  titleBackground,
  titleColor,
  description,
  descriptionColor,
  actionText,
  actionBorderColor,
  actionColor,
  actionLink,
  actionShadowColor,
  displayBackground,
  displayImage,
  carouselImages,
  videoUrl,
  productList,
  videoBackground,
  videoText,
  videoTextColor,
  smallActionText,
  smallActionBackground,
  smallActionTextColor,
  biggerActionText,
  biggerActionBackground,
  biggerActionBackgroundImage,
  biggerActionTextColor,
  hasProject,
  footerIconBackground,
  footerBackground,
  youtubeChannel,
  actionStore,
}) => (
  <>
    <Header active />
    <Container>
      <Module
        title={title}
        titleBackground={titleBackground}
        titleColor={titleColor}
        description={description}
        descriptionColor={descriptionColor}
        actionText={actionText}
        actionBorderColor={actionBorderColor}
        actionColor={actionColor}
        actionLink={actionLink}
        actionShadowColor={actionShadowColor}
        displayBackground={displayBackground}
        displayImage={displayImage}
        actionStore={actionStore}
        mobileProduct
      />

      {carouselImages && <Gallery carouselImages={carouselImages} />}

      {hasProject && <ProjectIntrmodl />}

      {videoUrl && (
        <VideoContainer videoBackground={videoBackground}>
          <VideoWrapper>
            <VideoText videoTextColor={videoTextColor}>{videoText}</VideoText>
            <Embed>
              <iframe
                src={videoUrl}
                height="100%"
                width="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title={title}
              />
            </Embed>
          </VideoWrapper>
        </VideoContainer>
      )}

      {smallActionText && (
        <SmallCallToAction
          smallActionBackground={smallActionBackground}
          href={actionStore && actionLink}
          target="_blank"
        >
          <ShadowText smallActionTextColor={smallActionTextColor} small>
            {smallActionText}
          </ShadowText>
        </SmallCallToAction>
      )}

      {productList && (
        <ProductsContainer>
          <ProductsTitle color={titleColor} backgroundColor={actionShadowColor}>
            Products
          </ProductsTitle>
          <ProductsWrapper>
            {productList.map((product) => (
              <Zoom wrapStyle={zoomStyle}>
                <ProductsItem src={product.image} />
              </Zoom>
            ))}
          </ProductsWrapper>
        </ProductsContainer>
      )}

      <BiggerCallToAction
        biggerActionBackground={biggerActionBackground}
        biggerActionBackgroundImage={biggerActionBackgroundImage}
        href={actionStore && actionLink}
        target="_blank"
      >
        <ShadowText
          biggerActionTextColor={biggerActionTextColor}
          biggerActionInnerBackground={biggerActionBackground}
          bigger
        >
          {biggerActionText}
        </ShadowText>
      </BiggerCallToAction>

      <Footer
        backgroundColor={footerIconBackground}
        iconBackgroundColor={footerBackground}
        youtubeChannel={youtubeChannel}
      />
    </Container>
  </>
)

export default Product
