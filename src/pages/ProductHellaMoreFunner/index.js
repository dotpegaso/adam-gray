import React from 'react'
import _ from 'lodash'
import { Product } from '../../components'
import IMAGES from '../../constants/images'
import COLORS from '../../constants/colors'

const reqSlides = require.context(
  '../../resources/images/hella_more_funner/slideshow',
  true,
  /\.(png|jpe?g|svg)$/
)
const reqSlidesResult = reqSlides.keys()
const slideList = reqSlidesResult.map((path) => {
  return { original: reqSlides(path) }
})

const reqFiles = require.context(
  '../../resources/images/hella_more_funner/products',
  true,
  /\.(png|jpe?g|svg)$/
)
const reqResult = reqFiles.keys()
const productList = reqResult.map((path) => {
  return { image: reqFiles(path) }
})

const carouselImages = _(5).times(() => ({
  original: IMAGES.MOCK_CAROUSEL,
}))

const ProductHellaMoreFunner = () => (
  <Product
    title="HELLA MORE FUNNER"
    titleBackground={IMAGES.TITLE_BG_HELLA_MORE_FUNNER}
    titleColor={COLORS.HELLA_FUNNER_PRIMARY}
    description="Hella More Funner is an art collective. Our process involves obsessively collecting thousands of images and icons from the Internet and collaging them.  Glorified drug abuse, subcultures, social media, fame, overproduction, waste, capitalism, politics, and hyped-up fads are the themes in these convoluted compositions. As we unwittingly developed a religious devotion to modern life’s input overload, the Internet has become our deity."
    descriptionColor={COLORS.HELLA_FUNNER_SECONDARY}
    icon={IMAGES.ICON_HELLA_MORE_FUNNER}
    actionText="GIVE ME A SHOW"
    actionLink="#zbwid-9005728d"
    actionBorderColor={COLORS.HELLA_FUNNER_SECONDARY}
    actionColor={COLORS.HELLA_FUNNER_SECONDARY}
    actionShadowColor={COLORS.HELLA_FUNNER_SUPPORT}
    displayBackground={IMAGES.DISPLAY_BG_HELLA_MORE_FUNNER}
    displayImage={IMAGES.ICON_HELLA_MORE_FUNNER}
    carouselImages={slideList || carouselImages}
    productList={productList}
    biggerActionText="GIVE ME A SHOW!!!"
    biggerActionTextColor={COLORS.HELLA_FUNNER_PRIMARY}
    biggerActionBackground={COLORS.HELLA_FUNNER_SECONDARY}
    biggerActionBackgroundImage={IMAGES.PRODUCT_BG_HELLA_MORE_FUNNER}
    footerBackground={COLORS.HELLA_FUNNER_SECONDARY}
    footerIconBackground={COLORS.HELLA_FUNNER_SUPPORT}
    actionStore
  />
)

export default ProductHellaMoreFunner
