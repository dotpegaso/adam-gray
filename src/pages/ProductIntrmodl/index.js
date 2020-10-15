import React from 'react'
import { Product } from '../../components'
import IMAGES from '../../constants/images'
import COLORS from '../../constants/colors'

const reqSlides = require.context(
  '../../resources/images/intrmodl/slideshow',
  true,
  /\.(png|jpe?g|svg)$/
)
const reqSlidesResult = reqSlides.keys()
const slideList = reqSlidesResult.map((path) => {
  return { original: reqSlides(path) }
})

const carouselImages = slideList

const ProductIntrmodl = () => (
  <Product
    title="INTRMODL"
    titleBackground={IMAGES.TITLE_BG_INTRMODL}
    titleColor={COLORS.INTRMODL_PRIMARY}
    description="Mission: We developed both a web app and an Android app as an IoT solution mounted in Rail Management Services vehicles and we calculate historical data to better visualize actionable-items for yard managers and upper managers. This project is currently in a few yards, with plans to operate as many as 50 yards in 2021, allowing RMS to better choreograph thousands of workers each day!"
    descriptionColor={COLORS.INTRMODL_PRIMARY}
    icon={IMAGES.ICON_INTRMODL}
    actionBorderColor={COLORS.INTRMODL_PRIMARY}
    actionColor={COLORS.INTRMODL_PRIMARY}
    actionShadowColor={COLORS.INTRMODL_SECONDARY}
    displayBackground={IMAGES.DISPLAY_BG_INTRMODL}
    displayImage={IMAGES.ICON_INTRMODL}
    carouselImages={carouselImages}
    biggerActionText="THANK YOU!!!"
    biggerActionTextColor={COLORS.INTRMODL_SECONDARY}
    biggerActionBackground={COLORS.INTRMODL_SUPPORT}
    biggerActionBackgroundImage={IMAGES.PRODUCT_BG_INTRMODL}
    footerBackground={COLORS.INTRMODL_PRIMARY}
    footerIconBackground={COLORS.INTRMODL_SECONDARY}
    hasProject
  />
)

export default ProductIntrmodl
