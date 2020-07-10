import React, { useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import {
  Module,
  Header,
  AnimatedLogo,
} from '../../components'
import {
  Intro,
  Content,
  Wrapper,
  Title,
  FirstLine,
  SecondLine,
} from './styles'
import IMAGES from '../../constants/images'
import COLORS from '../../constants/colors'

const Landing = () => {
  const [activeHeader, setActiveHeader] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleScroll = ({ index }) => {
    index > 0 ? setActiveHeader(true) : setActiveHeader(false)
    setCurrentIndex(index)
  }

  return (
    <section style={{  height: '100vh'}}>
      <Header active={activeHeader} />
      <ReactFullpage
        afterLoad={(origin, destination) => handleScroll(destination)}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <Intro className="section" state={state} fullpageApi={fullpageApi}>
              <Content>
                <AnimatedLogo />
                <Wrapper>
                  <Title>Welcome</Title>
                  <FirstLine>TO ADAM'S GRAY</FirstLine>
                  <SecondLine>WEBSITE</SecondLine>
                </Wrapper>
              </Content>
            </Intro>
            <Module
              id="hella-slingshots"
              title="HELLA SLINGSHOTS"
              titleBackground={IMAGES.TITLE_BG_HELLA_SLINGSHOTS}
              titleColor={COLORS.HELLA_PRIMARY}
              description="In this project I make over 35,000 slingshot each year in a variety of colors and designs."
              descriptionColor={COLORS.HELLA_PRIMARY}
              icon={IMAGES.ICON_HELLA_SLINGSHOTS}
              actionText="SEE PROJECT"
              actionLink="/hella-slingshots"
              actionBorderColor={COLORS.HELLA_PRIMARY}
              actionColor={COLORS.HELLA_PRIMARY}
              actionShadowColor={COLORS.SECONDARY}
              displayBackground={IMAGES.DISPLAY_BG_HELLA_SLINGSHOTS}
              threeModelIcon={currentIndex === 1 && IMAGES.THREE_HELLA_SLINGSHOTS}
            />
            <Module
              id="bicycle-bolts"
              title="BICYCLE BOLTS"
              titleBackground={IMAGES.TITLE_BG_BICYCLE_BOLTS}
              titleColor={COLORS.BICYCLE_PRIMARY}
              description="Here i make and sell metric security bolts to help keep components on your bicycle safe from opportunistic thievery."
              descriptionColor={COLORS.BICYCLE_PRIMARY}
              icon={IMAGES.ICON_BICYCLE_BOLTS}
              actionText="SEE PROJECT"
              actionLink="/bicycle-bolts"
              actionBorderColor={COLORS.BICYCLE_PRIMARY}
              actionColor={COLORS.BICYCLE_PRIMARY}
              actionShadowColor={COLORS.BICYCLE_SECONDARY}
              displayBackground={IMAGES.DISPLAY_BG_BICYCLE_BOLTS}
              displayImage={currentIndex === 2 && IMAGES.DISPLAY_IMG_BICYCLE_BOLTS}
              animate
            />
            <Module
              id="surf-brain"
              title="SURF BRAIN"
              titleBackground={IMAGES.TITLE_BG_SURF_BRAIN}
              titleColor={COLORS.SURF_SECONDARY}
              description="In this project i make a bump cap to protect your head while surfing."
              descriptionColor={COLORS.SURF_PRIMARY}
              icon={IMAGES.ICON_SURF_BRAIN}
              actionText="SEE PROJECT"
              actionLink="/surf-brain"
              actionBorderColor={COLORS.SURF_PRIMARY}
              actionColor={COLORS.SURF_SECONDARY}
              actionShadowColor={COLORS.SURF_SUPPORT}
              displayBackground={IMAGES.DISPLAY_BG_SURF_BRAIN}
              displayImage={currentIndex === 3 && IMAGES.DISPLAY_IMG_SURF_BRAIN}
              animate
            />
            <Module
              id="hella-more-funner"
              title="HELLA MORE FUNNER"
              titleBackground={IMAGES.TITLE_BG_HELLA_MORE_FUNNER}
              titleColor={COLORS.HELLA_FUNNER_PRIMARY}
              description="In this art project i make ridiculously complex and ADD addled collages from images found online."
              descriptionColor={COLORS.HELLA_FUNNER_SECONDARY}
              icon={IMAGES.ICON_HELLA_MORE_FUNNER}
              actionText="GIVE ME A SHOW"
              actionLink="/hella-more-funner"
              actionBorderColor={COLORS.HELLA_FUNNER_SECONDARY}
              actionColor={COLORS.HELLA_FUNNER_SECONDARY}
              actionShadowColor={COLORS.HELLA_FUNNER_SUPPORT}
              displayBackground={IMAGES.DISPLAY_BG_HELLA_MORE_FUNNER}
              lottieIcon={currentIndex === 4 && IMAGES.LOTTIE_HELLA_MORE_FUNNER}
            />
            <Module
              id="intrmodl"
              title="INTRMODL"
              titleBackground={IMAGES.TITLE_BG_INTRMODL}
              titleColor={COLORS.INTRMODL_PRIMARY}
              description="This is a logistics project in which we delivered a fleet management solution for intermodal yards."
              descriptionColor={COLORS.INTRMODL_PRIMARY}
              icon={IMAGES.ICON_INTRMODL}
              actionText="SEE PROJECT"
              actionLink="/intrmodl"
              actionBorderColor={COLORS.INTRMODL_PRIMARY}
              actionColor={COLORS.INTRMODL_PRIMARY}
              actionShadowColor={COLORS.INTRMODL_SECONDARY}
              displayBackground={IMAGES.DISPLAY_BG_INTRMODL}
              displayImage={currentIndex === 5 && IMAGES.DISPLAY_IMG_INTRMODL}
              animate
            />
          </ReactFullpage.Wrapper>
        )}
      />
    </section>
  )
}

export default Landing
