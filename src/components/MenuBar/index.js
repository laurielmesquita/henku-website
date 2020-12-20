import React from 'react'
import Brand from '../Brand'
import SocialLinks from '../SocialLinks'

import {
  MenuBarWrapper,
  Container,
  MenuBarList,
  MenuBarItem,
  MenuBarLinks
} from './style'

const MenuBar = () => (
  <MenuBarWrapper>
    <Container>
      <h1>
        <MenuBarLinks to='/' title='Página inicial'>
          <Brand />
        </MenuBarLinks>
      </h1>
      <MenuBarList>
        <MenuBarItem>
          <MenuBarLinks to='/about' title='Página sobre nós'>
            Sobre Nós
          </MenuBarLinks>
        </MenuBarItem>
        <MenuBarItem>
          <MenuBarLinks to='/machine-learning' title='Página machine learning'>
            Machine Learning
          </MenuBarLinks>
        </MenuBarItem>
        <MenuBarItem>
          <MenuBarLinks to='/data-science' title='Página data science'>
            Data Science
          </MenuBarLinks>
        </MenuBarItem>
        <MenuBarItem>
          <SocialLinks />
        </MenuBarItem>
      </MenuBarList>
    </Container>
  </MenuBarWrapper>
)

export default MenuBar
