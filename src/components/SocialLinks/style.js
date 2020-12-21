import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const media = generateMedia({
  xs: '250px',
  sm: '576px',
  md: '768px',
  lg: '991px',
  xl: '1200px',
  xxl: '1400px'
})

export const SocialLink = styled.a`
  &:last-of-type {
    margin-left: 1.875rem;
  }
`

export const SocialLinkIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    color: var(--theme);
    width: 36px;
    height: 36px;
    transition: color 0.3s;

    &:hover {
      color: var(--highlight);
    }

    ${media.lessThan('lg')`
      color: rgba(255, 255, 255, 1);
      width: 46px;
      height: 46px;

      &:hover {
        color: rgba(255, 255, 255, 0.7);
      }
    `}
  }
`
