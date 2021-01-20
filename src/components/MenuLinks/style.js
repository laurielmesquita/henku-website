import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuLinksInput = styled.input`
  display: none;

  @media (max-width: 991.98px) {
    &:checked ~ label .menuBox {
      position: fixed;
      background-color: var(--theme);
      box-shadow: 0 0 0 140vw var(--deepDark), 0 0 0 140vh var(--deepDark);
    }
    &:checked ~ label .menuBtn {
      transform: rotate(45deg);
    }
    &:checked ~ label .menuBtn:after {
      transform: rotate(90deg);
      bottom: 0;
    }
    &:checked ~ label .menuBtn:before {
      transform: rotate(90deg);
      top: 0;
    }
    &:checked ~ section nav ul {
      opacity: 1;
      visibility: visible;
      z-index: 2;
    }
  }
`

export const MenuLinksLabel = styled.label`
  @media (max-width: 991.98px) {
    .menuBox {
      position: fixed;
      border-radius: 50%;
      background-color: var(--brand);
      top: 11px;
      right: 20px;
      cursor: pointer;
      width: 50px;
      height: 50px;
      position: absolute;
      box-shadow: 0 0 0 0 #fff, 0 0 0 0 #fff;
      transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1);
      z-index: 2;

      &:hover {
        box-shadow: 0 0 0 8px #fff, 0 0 0 8px #fff;
      }

      .menuBtn {
        position: relative;
        top: 24px;
        left: 13px;
        width: 24px;
        height: 2px;
        background: #fff;
        display: block;
        transform-origin: center;
        transition: 0.5s ease-in-out;

        &:after,
        &:before {
          background: #fff;
          content: '';
          display: block;
          transition: 0.5s ease-in-out;
          position: absolute;
          width: 100%;
          height: 100%;
        }

        &:before {
          top: -8px;
        }

        &:after {
          bottom: -8px;
        }
      }
    }
  }
`

export const MenuLinksNav = styled.nav`
  & > h1 {
    margin-bottom: 0;

    a {
      margin: 0;

      img {
        width: 105px;
        height: 40px;
      }
    }
  }

  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const MenuLinksList = styled.ul`
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  @media (max-width: 991.98px) {
    width: 88%;
    padding-right: 0;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    font-size: 2.8125rem;
    font-size: calc(32px + (60 - 32) * (100vw - 300px) / (1386 - 300));
    line-height: 1.2;
    opacity: 0;
    transition: 0.25s 0.1s cubic-bezier(0, 1.07, 0, 1.02);
    visibility: hidden;
    z-index: -2;
  }
`

export const MenuLinksItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 991.98px) {
    width: 100%;
    text-align: center;
    margin-bottom: 3rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (max-width: 335px) {
    margin-bottom: 2.5rem;
  }
`

export const MenuLinksLink = styled(Link)`
  margin-right: 3.75rem;
  color: var(--themeDark);
  font-family: 'Poppins', sans-serif;

  &.active {
    color: var(--highlight);
  }

  &:hover {
    color: var(--highlight);
  }

  @media (max-width: 991.98px) {
    margin: 0;
    color: rgba(255, 255, 255, 1);

    &.active,
    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  @media (min-width: 992px) {
    margin-right: 3.75rem;
  }
`
