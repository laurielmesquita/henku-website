import React from 'react'

import Button from '../Button'

import {
  HeroMediaOverlay,
  HeroMediaContent,
  HeroMediaParagraph,
  HeroMediaTitle
} from './style'

const HeroOverlay = () => {
  return (
    <HeroMediaOverlay>
      <HeroMediaContent>
        <HeroMediaTitle>
          Conteúdo mais importante Em uma chamada aqui
        </HeroMediaTitle>
        <HeroMediaParagraph>
          Aqui um texto de apoio, descritivo que fortaleça o título e convide o
          usuário para navegar.
        </HeroMediaParagraph>
        <Button
          slug='/about'
          buttonClass='buttonDark'
          buttonTitle='Consulte um especialista'
        >
          Consulte um especialista
        </Button>
      </HeroMediaContent>
    </HeroMediaOverlay>
  )
}

export default HeroOverlay
