import React from 'react'

import links from './data'
import Brand from '../Brand'
import SocialLinks from '../SocialLinks'
import {
  MenuLinksInput,
  MenuLinksLabel,
  Container,
  MenuLinksList,
  MenuLinksItem,
  MenuLinksLink
} from './style'

const MenuLinks = () => (
  <>
    <MenuLinksInput id='navbar' type='checkbox' />
    <MenuLinksLabel for='navbar'>
      <div className='menu'>
        <span className='hamburger' />
      </div>
    </MenuLinksLabel>
    <Container>
      <h1>
        <MenuLinksLink to='/' title='Página inicial'>
          <Brand />
        </MenuLinksLink>
      </h1>
      <MenuLinksList>
        {links.map((link, i) => (
          <MenuLinksItem key={i}>
            <MenuLinksLink
              to={link.url}
              activeClassName='active'
              title={link.title}
            >
              {link.label}
            </MenuLinksLink>
          </MenuLinksItem>
        ))}
        <MenuLinksItem>
          <SocialLinks />
        </MenuLinksItem>
      </MenuLinksList>
    </Container>
  </>
)

export default MenuLinks
