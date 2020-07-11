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

const ProductIntrmodl = () => (
  <Product
    title="INTRMODL"
    titleBackground={IMAGES.TITLE_BG_INTRMODL}
    titleColor={COLORS.INTRMODL_PRIMARY}
    description="Mission: We make metric security bolts. Our intended use and mission is to help keep components on your bicycle safe from opportunistic thievery. Simply replace the existing Allen bolts with our security bolts.   Each set comes with an L- key. The use of these bolts will drastically reduce the chances of a thief making off with your saddle, seatpost, stem, handlebars, wheels and other."
    descriptionColor={COLORS.INTRMODL_PRIMARY}
    icon={IMAGES.ICON_INTRMODL}
    actionText="SEE INTERFACE"
    actionLink="/intrmodl"
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
