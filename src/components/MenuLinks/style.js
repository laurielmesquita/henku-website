import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.nav`
  margin: 0 auto;
  max-width: var(--container);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MenuLinksList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const MenuLinksItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const MenuLinksLink = styled(Link)`
  display: block;
  margin-right: 3.75rem;
  color: var(--themeDark);
  font-family: 'Poppins', sans-serif;

  &.active {
    color: var(--highlight);
  }

  &:hover {
    color: var(--highlight);
  }
`
