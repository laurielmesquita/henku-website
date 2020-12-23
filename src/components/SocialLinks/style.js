import styled from 'styled-components'

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
    color: var(--brand);
    width: 36px;
    height: 36px;
    transition: color 0.3s;

    &:hover {
      color: var(--highlight);
    }

    @media only screen and (max-width: 991px) {
      color: rgba(255, 255, 255, 1);
      width: 46px;
      height: 46px;

      &:hover {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
`
