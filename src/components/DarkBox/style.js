import styled from 'styled-components'
import { Link } from 'gatsby'

export const DarkBoxWrapper = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
`

export const DarkBoxContent = styled.div`
  color: #fff;
  padding: 2.5rem 3.0625rem;
  background-color: var(--deepDark);
  display: flex;
  flex-direction: column;
  align-content: space-between;
`

export const DarkBoxTag = styled.span`
  display: block;
  color: var(--themeLight);
  font-family: 'Poppins', sans-serif;
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
`

export const DarkBoxHead = styled.h3`
  font-size: calc(1.275rem + 0.4vw);
  font-weight: 400;
  line-height: 1.3;
  padding-right: 2.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 669.98px) {
    padding-right: 0;
  }

  @media (min-width: 640px) {
    font-size: 1.5rem;
  }

  @media (min-width: 992px) {
    font-size: 1.875rem;
  }
`

export const DarkBoxLink = styled(Link)`
  color: var(--lightGreen);
  font-size: 0.9375rem;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  margin-top: auto;

  svg {
    will-change: transform;
    overflow: hidden;
    margin-left: 10px;
    transition: transform 0.2s ease-in-out;
    will-change: transform;

    path:last-child {
      will-change: transform;
      transform-origin: right center;
      transition: transform 0.2s ease-in-out;
    }
  }

  &:hover svg {
    transform: translateX(22%);

    path:last-child {
      transform: scaleX(1.3);
    }
  }
`
