import React from 'react'
import Module from '../Module'
import Header from '../Header'
import Gallery from '../Gallery'
import Footer from '../Footer'
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
      />
      
      {carouselImages && <Gallery carouselImages={carouselImages} />}

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
        <SmallCallToAction smallActionBackground={smallActionBackground}>
          <ShadowText smallActionTextColor={smallActionTextColor} small>
            {smallActionText}
          </ShadowText>
        </SmallCallToAction>
      )}

      {productList && (
        <ProductsContainer>
          <ProductsTitle
            color={titleColor}
            backgroundColor={actionShadowColor}
          >
            Products
          </ProductsTitle>
          <ProductsWrapper>
            {productList.map( product => <ProductsItem src={product.image} /> )}
          </ProductsWrapper>
        </ProductsContainer>
      )}

      <BiggerCallToAction
        biggerActionBackground={biggerActionBackground}
        biggerActionBackgroundImage={biggerActionBackgroundImage}
      >
        <ShadowText
          biggerActionTextColor={biggerActionTextColor}
          biggerActionInnerBackground={biggerActionBackground}
          bigger
        >
          {biggerActionText}
        </ShadowText>
      </BiggerCallToAction>

      <Footer />
    </Container>
  </>
)

export default Product
