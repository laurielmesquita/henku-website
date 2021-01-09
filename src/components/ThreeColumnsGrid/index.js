import React from 'react'

import Icons from './Icons'
import contents from './data'

import {
  ThreeColumnWrapper,
  ThreeColumnContent,
  ThreeColumnHead,
  ThreeColumnIcon,
  ThreeColumnInfo
} from './style'

const ThreeColumnsGrid = ({ contentId }) => (
  <ThreeColumnWrapper>
    {contents[contentId].map((content, i) => {
      const Icon = Icons[content.icon]

      return (
        <ThreeColumnContent key={i}>
          <ThreeColumnIcon>
            <Icon />
          </ThreeColumnIcon>
          <ThreeColumnHead>{content.title}</ThreeColumnHead>
          <ThreeColumnInfo>{content.info}</ThreeColumnInfo>
        </ThreeColumnContent>
      )
    })}
  </ThreeColumnWrapper>
)

export default ThreeColumnsGrid
