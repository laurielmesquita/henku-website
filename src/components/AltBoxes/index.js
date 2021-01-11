import React from 'react'

import contents from './data'

import {
  AltBoxesWrapper,
  AltBoxesImage,
  AltBoxesInfo,
  AltBoxesHead,
  AltBoxesDescription
} from './style'

const AltBoxes = ({ AltBoxesId }) => (
  <>
    {contents[AltBoxesId].map((content, i) => {
      return (
        <AltBoxesWrapper key={i}>
          <AltBoxesImage>
            <img src={content.image} alt={content.title} />
          </AltBoxesImage>
          <AltBoxesInfo>
            <AltBoxesHead>{content.title}</AltBoxesHead>
            <AltBoxesDescription>{content.info}</AltBoxesDescription>
          </AltBoxesInfo>
        </AltBoxesWrapper>
      )
    })}
  </>
)

export default AltBoxes
