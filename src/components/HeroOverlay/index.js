import React from 'react'

import Button from '../Button'

import {
  HeroMediaOverlay,
  HeroMediaContent,
  HeroMediaParagraph,
  HeroMediaTitle
} from './style'

const HeroOverlay = ({ heroTitle, heroInfo, heroBtnTitle, slug }) => {
  return (
    <HeroMediaOverlay>
      <HeroMediaContent>
        <HeroMediaTitle>{heroTitle}</HeroMediaTitle>
        <HeroMediaParagraph>{heroInfo}</HeroMediaParagraph>
        <Button
          slug={slug}
          buttonClass='buttonDark'
          buttonTitle='Consulte um especialista'
        >
          {heroBtnTitle}
        </Button>
      </HeroMediaContent>
    </HeroMediaOverlay>
  )
}

export default HeroOverlay
