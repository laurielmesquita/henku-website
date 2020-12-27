import React from 'react'

import {
  HeroMediaOverlay,
  HeroMediaContent,
  HeroMediaParagraph,
  HeroMediaTitle
} from './style'

const HeroOverlay = () => (
  <HeroMediaOverlay>
    <HeroMediaContent>
      <HeroMediaTitle>
        Conteúdo mais importante Em uma chamada aqui
      </HeroMediaTitle>
      <HeroMediaParagraph>
        Aqui um texto de apoio, descritivo que fortaleça o título e convide o
        usuário para navegar.
      </HeroMediaParagraph>
    </HeroMediaContent>
  </HeroMediaOverlay>
)

export default HeroOverlay
