import styled from 'styled-components'
import { Link } from 'gatsby'

export const ButtonWrapper = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 1rem 1.9rem;
  font-size: 1rem;
  font-family: Montserrat, sans-serif;
  background-color: transparent;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 4px solid var(--highlight);
    transition: all 0.3s;
    z-index: -1;
  }

  &.buttonLight {
    font-weight: 500;
    color: var(--themeDark);
  }

  &.buttonLight:hover {
    color: #fff;

    &::before {
      background-color: var(--highlight);
    }
  }

  &.buttonDark {
    font-weight: 400;
    color: #fff;
  }

  &.buttonDark:hover {
    color: var(--deepDark);
    font-weight: 500;

    &::before {
      border: 4px solid var(--lightGreen);
      background-color: var(--lightGreen);
    }
  }

  @media (min-width: 576px) {
    padding: 1.25rem 2.125rem;
  }
`
