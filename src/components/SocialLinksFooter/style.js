import styled from 'styled-components'

export const FooterList = styled.ul`
  margin-bottom: 3.75rem;
  display: grid;
  grid-column-gap: 34px;
  grid-row-gap: 66px;
  grid-template-columns: repeat(auto-fit, minmax(106px, 1fr));

  @media (min-width: 375px) {
    grid-column-gap: 66px;
  }

  @media (min-width: 576px) {
    grid-column-gap: 76px;
  }

  @media (min-width: 670px) {
    grid-column-gap: 130px;
  }
`

export const FooterItem = styled.li``

export const FooterLink = styled.a`
  display: block;

  &:hover div {
    border-color: var(--lightGreen);
  }

  span {
    color: var(--lightGreen);
    display: block;
    margin-top: 20px;
  }
`

export const FooterLinkIconWrapper = styled.div`
  padding: 25px;
  border: 5px solid #fff;
  transition: all 0.3s;

  svg {
    margin: 0 auto;
    color: #fff;
    width: 46px;
    height: 46px;
    transition: color 0.3s;
  }
`
