import React from 'react'

import { AltBoxesWrapper, AltBoxesImage, AltBoxesInfo } from './style'

const AltBoxes = () => (
  <>
    <AltBoxesWrapper>
      <AltBoxesImage>
        <h1>Bloco de imagem</h1>
      </AltBoxesImage>
      <AltBoxesInfo>
        <h1>Bloco de texto</h1>
      </AltBoxesInfo>
    </AltBoxesWrapper>
    <AltBoxesWrapper className='reverse'>
      <AltBoxesImage>
        <h1>Bloco de imagem</h1>
      </AltBoxesImage>
      <AltBoxesInfo>
        <h1>Bloco de texto</h1>
      </AltBoxesInfo>
    </AltBoxesWrapper>
  </>
)

export default AltBoxes
