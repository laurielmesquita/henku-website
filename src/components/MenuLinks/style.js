import styled from 'styled-components'
import { Link } from 'gatsby'
import { generateMedia } from 'styled-media-query'

const media = generateMedia({
  xs: '250px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
})

export const MenuLinksInput = styled.input`
  display: none;

  ${media.lessThan('lg')`
    &:checked ~ label .menu {
      box-shadow: 0 0 0 130vw var(--theme), 0 0 0 130vh var(--theme);
    }
    &:checked ~ label .hamburger {
      transform: rotate(45deg);
    }
    &:checked ~ label .hamburger:after {
      transform: rotate(90deg);
      bottom: 0;
    }
    &:checked ~ label .hamburger:before {
      transform: rotate(90deg);
      top: 0;
    }
    &:checked ~ nav ul {
      opacity: 1;
      visibility: visible;
    }
  `}
`

export const MenuLinksLabel = styled.label`
  ${media.lessThan('lg')`
    .menu {
      border-radius: 50%;
      background: var(--theme);
      top: 15px;
      box-shadow: 0 0 0 0 #fff, 0 0 0 0 #fff;
      cursor: pointer;
      height: 50px;
      position: absolute;
      right: 15px;
      transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: 2;

      &:hover {
        box-shadow: 0 0 0 8px #fff, 0 0 0 8px #fff;
      }

      .hamburger {
        position: relative;
        top: 24px;
        left: 13px;
        width: 24px;
        height: 2px;
        background: #FFF;
        display: block;
        transform-origin: center;
        transition: 0.5s ease-in-out;

        &:after,
        &:before {
          background: #FFF;
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
  `}
`

export const Container = styled.nav`
  margin: 0 auto;
  max-width: 1386px;

  & > h1 {
    padding-left: 0.9375rem;
    margin-bottom: 0;

    a {
      margin: 0;

      img {
        width: 105px;
        height: 40px;
      }
    }
  }

  ${media.greaterThan('lg')`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

export const MenuLinksList = styled.ul`
  ${media.greaterThan('lg')`
    display: flex;
    padding-right: 0.9375rem;
    flex-direction: row;
    justify-content: space-around;
  `}

  ${media.lessThan('lg')`
    padding-right: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    font-size: 2.8125rem;
    font-size: calc( 32px + (60 - 32) * (100vw - 300px) / (1386 - 300) );
    line-height: 1.4;
    opacity: 0;
    /* transition: 0.25s 0.1s cubic-bezier(0, 1.07, 0, 1.02); */
    visibility: hidden;
    z-index: 2;
  `}
`

export const MenuLinksItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  ${media.lessThan('lg')`
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    margin-bottom: calc( 16px + (40 - 16) * (100vw - 300px) / (1386 - 300) );

    &:last-of-type {
      margin-bottom: 0;
    }
  `}

  ${media.greaterThan('lg')`
  `}
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

  ${media.lessThan('lg')`
    margin: 0 0 1em 0;
    color: rgba(255, 255, 255, 1);

    &.active,
    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  `}

  ${media.greaterThan('lg')`
    margin-right: 3.75rem;
  `}
`
