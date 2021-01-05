import React from 'react'

import Icons from './Icons'
import contents from './data'
import Button from '../Button'

import {
  ThreeColumnWrapper,
  ThreeColumnContent,
  ThreeColumnHead,
  ThreeColumnIcon,
  ThreeColumnInfo
} from './style'

const ThreeColumnsGrid = () => (
  <>
    <ThreeColumnWrapper>
      {contents.map((content, i) => {
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
    <p className='textCenter mgTop-100'>
      <Button
        slug='/about'
        buttonClass='buttonLight'
        buttonTitle='Saiba mais sobre a Henku'
      >
        Saiba mais sobre a Henku
      </Button>
    </p>
  </>
)

export default ThreeColumnsGrid
