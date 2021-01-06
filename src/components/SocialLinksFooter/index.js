import React from 'react'

import Icons from './Icons'

import links from './data'

import {
  FooterList,
  FooterItem,
  FooterLink,
  FooterLinkIconWrapper
} from './style'

const SocialLinksFooter = () => (
  <FooterList>
    {links.map((link, i) => {
      const Icon = Icons[link.label]

      return (
        <FooterItem key={i}>
          <FooterLink
            href={link.url}
            title={link.label}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FooterLinkIconWrapper>
              <Icon />
            </FooterLinkIconWrapper>
            <span>{link.label}</span>
          </FooterLink>
        </FooterItem>
      )
    })}
  </FooterList>
)

export default SocialLinksFooter
