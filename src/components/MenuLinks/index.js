import React, { useState, useEffect } from 'react'

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

const MenuLinks = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const html = document.querySelector('html')
    scroll
      ? (html.style.overflow = 'hidden')
      : (html.style.overflow = 'visible')
  }, [scroll])

  return (
    <>
      <MenuLinksInput
        id='navbar'
        onClick={() => setScroll(!scroll)}
        type='checkbox'
      />
      <MenuLinksLabel for='navbar'>
        <div className='menuBox'>
          <span className='menuBtn' />
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
}

export default MenuLinks
