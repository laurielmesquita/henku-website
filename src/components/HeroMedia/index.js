import React from 'react'

import HeroOverlay from '../HeroOverlay'

import video from '../../images/henku-home.mp4'

import { HeroMediaWrapper, HeroMediaSource } from './style'

const HeroMedia = () => (
  <HeroMediaWrapper>
    <HeroMediaSource
      src={video}
      className='video-player'
      loop
      muted
      autoPlay
      type='video/mp4'
    />
    <HeroOverlay />
  </HeroMediaWrapper>
)

export default HeroMedia
