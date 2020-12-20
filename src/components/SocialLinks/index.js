import React from 'react'

import Icons from './Icons'
import links from './data'

import { SocialLink, SocialLinkIconWrapper } from './style'

const SocialLinks = () => (
  <>
    {links.map((link, i) => {
      const Icon = Icons[link.label]

      return (
        <SocialLink
          key={i}
          href={link.url}
          title={link.label}
          target='_blank'
          rel='noopener noreferrer'
        >
          <SocialLinkIconWrapper>
            <Icon />
          </SocialLinkIconWrapper>
        </SocialLink>
      )
    })}
  </>
)

export default SocialLinks
