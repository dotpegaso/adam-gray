import React from 'react'
import _ from 'lodash'
import {
  Product,
} from '../../components'
import IMAGES from '../../constants/images'
import COLORS from '../../constants/colors'

const carouselImages = _(5).times(() => (
  {
    original: IMAGES.MOCK_CAROUSEL,
  }
))

const productList = _(24).times(() => (
  { image: IMAGES.MOCK_PRODUCT, }
))

const ProductBicycleBolts = () => (
  <Product
    title="BICYCLE BOLTS"
    titleBackground={IMAGES.TITLE_BG_BICYCLE_BOLTS}
    titleColor={COLORS.BICYCLE_PRIMARY}
    description="Mission: We make metric security bolts. Our intended use and mission is to help keep components on your bicycle safe from opportunistic thievery. Simply replace the existing Allen bolts with our security bolts.   Each set comes with an L- key. The use of these bolts will drastically reduce the chances of a thief making off with your saddle, seatpost, stem, handlebars, wheels and other components."
    descriptionColor={COLORS.BICYCLE_PRIMARY}
    icon={IMAGES.ICON_BICYCLE_BOLTS}
    actionText="SEE STORE"
    actionLink="/bicycle-bolts"
    actionBorderColor={COLORS.BICYCLE_PRIMARY}
    actionColor={COLORS.BICYCLE_PRIMARY}
    actionShadowColor={COLORS.BICYCLE_SECONDARY}
    displayBackground={IMAGES.DISPLAY_BG_BICYCLE_BOLTS}
    displayImage={IMAGES.ICON_BICYCLE_BOLTS}
    carouselImages={carouselImages}
    videoUrl="https://www.youtube.com/embed/xAwB9lQnxAY"
    productList={productList}
    videoBackground={COLORS.BICYCLE_PRIMARY}
    videoText="Briefly introduction"
    videoTextColor={COLORS.BICYCLE_SUPPORT}
    smallActionText="SEE STORE NOW!!!"
    smallActionBackground={COLORS.BICYCLE_SUPPORT}
    smallActionTextColor={COLORS.BICYCLE_PRIMARY}
    biggerActionText="SEE STORE NOW!!!"
    biggerActionTextColor={COLORS.BICYCLE_PRIMARY}
    biggerActionBackground={COLORS.BICYCLE_SUPPORT}
    biggerActionBackgroundImage={IMAGES.PRODUCT_BG_BICYLE_BOLTS}
  />
)

export default ProductBicycleBolts
