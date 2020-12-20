import React from 'react'
import Brand from '../Brand'

import { MenuBarWrapper, Container, MenuBarList, MenuBarLinks } from './style'

const MenuBar = () => (
  <MenuBarWrapper>
    <Container>
      <h1>
        <MenuBarLinks to='/' title='Página inicial'>
          <Brand />
        </MenuBarLinks>
      </h1>
      <MenuBarList>
        <li>
          <MenuBarLinks to='/about' title='Página sobre nós'>
            Sobre Nós
          </MenuBarLinks>
        </li>
        <li>
          <MenuBarLinks to='/machine-learning' title='Página machine learning'>
            Machine Learning
          </MenuBarLinks>
        </li>
        <li>
          <MenuBarLinks to='/data-science' title='Página data science'>
            Data Science
          </MenuBarLinks>
        </li>
      </MenuBarList>
    </Container>
  </MenuBarWrapper>
)

export default MenuBar
