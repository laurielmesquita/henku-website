import React from 'react'

import HeroOverlay from '../HeroOverlay'

import { HeroMediaWrapper, HeroMediaSource } from './style'

const HeroMedia = ({ srcMedia, heroTitle, heroInfo, heroBtnTitle, slug }) => (
  <HeroMediaWrapper>
    <HeroMediaSource
      src={srcMedia}
      className='video-player'
      loop
      muted
      autoPlay
      playsinline
      preload='auto'
      type='video/mp4'
    />
    <HeroOverlay
      heroTitle={heroTitle}
      heroInfo={heroInfo}
      heroBtnTitle={heroBtnTitle}
      slug={slug}
    />
  </HeroMediaWrapper>
)

export default HeroMedia
