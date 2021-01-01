import styled from 'styled-components'
import { Link } from 'gatsby'

export const ButtonWrapper = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 1.25rem 2.125rem;
  font-size: 0.759rem;
  font-family: Montserrat, sans-serif;

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
    /* color: var(--themeDark); */

    &::before {
      animation: change-color-light 3s ease 0s infinite normal;
    }
  }

  &.buttonDark {
    font-weight: 400;
    color: #fff;
  }

  &.buttonDark:hover {
    &::before {
      animation: change-color-dark 3s ease 0s infinite normal;
      border: 4px solid var(--lightGreen);
    }
  }

  @media (min-width: 576px) {
    font-size: 1rem;
  }

  @keyframes change-color-light {
    0% {
      background-color: hsla(231, 35%, 92%, 0);
    }
    50% {
      background-color: hsla(231, 35%, 92%, 1);
    }
    100% {
      background-color: hsla(231, 35%, 92%, 0);
    }
  }

  @keyframes change-color-dark {
    0% {
      background-color: hsla(67, 85%, 66%, 0);
    }
    50% {
      background-color: hsla(67, 85%, 66%, 0.2);
    }
    100% {
      background-color: hsla(67, 85%, 66%, 0);
    }
  }
`
