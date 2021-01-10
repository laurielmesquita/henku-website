import styled from 'styled-components'

export const AltBoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: aquamarine;
  margin-bottom: 6.25rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    &.reverse {
      flex-direction: row-reverse;
    }

    & div:nth-child(2) {
      margin-left: auto;
    }

    &.reverse div:nth-child(2) {
      margin-right: auto;
      margin-left: 0;
    }
  }
`

export const AltBoxesImage = styled.div`
  background-color: greenyellow;

  @media (min-width: 768px) {
    max-width: 41.6666666667%;
  }
`

export const AltBoxesInfo = styled.div`
  width: 100%;
  height: 100px;
  background-color: aqua;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`
