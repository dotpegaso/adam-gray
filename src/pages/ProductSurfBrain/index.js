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

const ProductSurfBrain = () => (
  <Product
    title="SURF BRAIN"
    titleBackground={IMAGES.TITLE_BG_SURF_BRAIN}
    titleColor={COLORS.SURF_SECONDARY}
    description="My name is Adam Gray and I grew up spending summers surfing and kayaking in Stinson and Bolinas CA. I’m the middle child of 3 red headed brothers and got my my first boogie when I was 4.   I’ve been wiping out and getting sunburned ever since. Sadly I’m not the most talented surfer. I don’t like the feel or look of a full helmet. So I decided to make something in between no protection and reasonable protection that looks like a hat."
    descriptionColor={COLORS.SURF_PRIMARY}
    icon={IMAGES.ICON_SURF_BRAIN}
    actionText="SEE PROJECT"
    actionLink="/surf-brain"
    actionBorderColor={COLORS.SURF_PRIMARY}
    actionColor={COLORS.SURF_SECONDARY}
    actionShadowColor={COLORS.SURF_SUPPORT}
    displayBackground={IMAGES.DISPLAY_BG_SURF_BRAIN}
    displayImage={IMAGES.ICON_SURF_BRAIN}
    carouselImages={carouselImages}
    videoUrl="https://www.youtube.com/embed/xAwB9lQnxAY"
    productList={productList}
    videoBackground={COLORS.SURF_PRIMARY}
    videoText="Briefly introduction"
    videoTextColor={COLORS.SURF_SECONDARY}
    smallActionText="SEE STORE NOW!!!"
    smallActionBackground={COLORS.SURF_SECONDARY}
    smallActionTextColor={COLORS.SURF_SUPPORT}
    biggerActionText="SEE STORE NOW!!!"
    biggerActionTextColor={COLORS.SURF_PRIMARY}
    biggerActionBackground={COLORS.SURF_SECONDARY}
    biggerActionBackgroundImage={IMAGES.PRODUCT_BG_SURF_BRAIN}
  />
)

export default ProductSurfBrain
