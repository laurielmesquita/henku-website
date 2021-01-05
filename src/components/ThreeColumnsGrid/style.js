import styled from 'styled-components'

export const ThreeColumnWrapper = styled.div`
  display: grid;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));

  @media (min-width: 1200px) {
    grid-column-gap: 100px;
  }
`

export const ThreeColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  text-align: center;
`

export const ThreeColumnIcon = styled.span`
  display: block;
  color: var(--highlight);
  margin-bottom: 1.5rem;

  svg {
    width: 48px;
    height: 48px;
  }
`

export const ThreeColumnHead = styled.h4`
  margin-bottom: 1.125rem;

  @media (min-width: 640px) {
    font-size: 1.5rem;
  }

  @media (min-width: 992px) {
    font-size: 1.625rem;
  }
`

export const ThreeColumnInfo = styled.p`
  @media (max-width: 1019.98px) {
    padding-right: 0.9375rem;
    padding-left: 0.9375rem;
  }
`
