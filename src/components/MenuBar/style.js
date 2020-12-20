import styled from 'styled-components'
import { Link } from 'gatsby'
// import media from 'styled-media-query'

export const MenuBarWrapper = styled.header`
  padding: 1rem 0;
  width: 100%;
  background-color: coral;
`

export const Container = styled.nav`
  margin: 0 auto;
  max-width: var(--container);
  background-color: greenyellow;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MenuBarList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-right: 4px;
  padding-left: 10px;
`
export const MenuBarLinks = styled(Link)`
  display: block;
  margin-right: 3.75rem;
  color: var(--themeDark);
  font-family: 'Poppins', sans-serif;

  &:hover {
    color: var(--highlight);
  }

  &.active {
    span {
      color: var(--highlight);
    }
  }
`
