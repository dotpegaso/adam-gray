import React from 'react'
import _ from 'lodash'
import {
  Product,
} from '../../components'
import IMAGES from '../../constants/images'
import COLORS from '../../constants/colors'

const reqSlides = require.context('../../resources/images/bicycle_bolts/slideshow', true, /\.(png|jpe?g|svg)$/)
const reqSlidesResult = reqSlides.keys()
const slideList = reqSlidesResult.map(path => {
  return { original: reqSlides(path) }
})

const reqFiles = require.context('../../resources/images/hella_slingshots/products', true, /\.(png|jpe?g|svg)$/)
const reqResult = reqFiles.keys()
const productList = reqResult.map(path => {
  return { image: reqFiles(path) }
})

const carouselImages = _(5).times(() => (
  {
    original: IMAGES.MOCK_CAROUSEL,
  }
))

const ProductHellaSlingShots = () => (
  <Product
    id="hella-slingshots"
    title="HELLA SLINGSHOTS"
    titleBackground={IMAGES.TITLE_BG_HELLA_SLINGSHOTS}
    titleColor={COLORS.HELLA_PRIMARY}
    description="My name is Adam Gray and I grew up in the woods of Northern California. I’m the middle child of 3 red headed brothers and got my first slingshot when I was 4 years old. We had a hay bale target range in back that we directed a growing arsenal of projectile weapons at.  We had bows, crossbows, bb guns, 22’s and paintball guns but the slingshot was tops. It’s the quintessential tool childhood and I’ve indispensable when I’m camping and hiking."
    descriptionColor={COLORS.HELLA_PRIMARY}
    actionText="SEE STORE"
    actionLink="/hella-stringshots"
    actionBorderColor={COLORS.HELLA_PRIMARY}
    actionColor={COLORS.HELLA_PRIMARY}
    actionShadowColor={COLORS.SECONDARY}
    displayBackground={IMAGES.DISPLAY_BG_HELLA_SLINGSHOTS}
    displayImage={IMAGES.ICON_HELLA_SLINGSHOTS}
    carouselImages={slideList || carouselImages}
    videoUrl="https://www.youtube.com/embed/oROKsecYuVU"
    productList={productList}
    videoBackground={COLORS.HELLA_SECONDARY}
    videoText="Briefly introduction"
    videoTextColor={COLORS.HELLA_PRIMARY}
    smallActionText="SEE STORE NOW!!!"
    smallActionBackground={COLORS.HELLA_PRIMARY}
    smallActionTextColor={COLORS.HELLA_SECONDARY}
    biggerActionText="SEE STORE NOW!!!"
    biggerActionTextColor={COLORS.HELLA_SECONDARY}
    biggerActionBackground={COLORS.HELLA_PRIMARY}
    biggerActionBackgroundImage={IMAGES.PRODUCT_BG_HELLA_SLINGSHOTS}
    footerBackground={COLORS.HELLA_PRIMARY}
    footerIconBackground={COLORS.HELLA_SECONDARY}
  />
)

export default ProductHellaSlingShots
