import styled from 'styled-components'

export const SocialLink = styled.a`
  color: var(--themeDark);
  transition: color 0.5s;

  &:last-of-type {
    margin-left: 1.875rem;
  }

  &:hover {
    color: var(--highlight);
  }
`

export const SocialLinkIconWrapper = styled.div`
  fill: var(--themeDark);
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    width: 36px;
    height: 36px;
  }
`
