import React from 'react'
import ImageGallery from 'react-image-gallery'

const Gallery = ({
  carouselImages
}) => (
  <ImageGallery
    items={carouselImages}
    showFullscreenButton={false}
    useTranslate3D={false}
    showPlayButton={false}
    showThumbnails={false}
    slideDuration={250}
    slideInterval={5000}
    showBullets
    lazyLoad
    autoPlay
  />
)

export default Gallery
