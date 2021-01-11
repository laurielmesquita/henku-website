import styled from 'styled-components'

export const AltBoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6.25rem;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }

    & div:nth-child(2) {
      margin-left: auto;
    }

    &:nth-child(odd) div:nth-child(2) {
      margin-right: auto;
      margin-left: 0;
    }
  }
`

export const AltBoxesImage = styled.div`
  @media (max-width: 767.98px) {
    margin-bottom: 2.5rem;
  }

  @media (min-width: 768px) {
    max-width: 41.6666666667%;
  }
`

export const AltBoxesInfo = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`

export const AltBoxesHead = styled.h4`
  margin-bottom: 1.125rem;

  @media (min-width: 640px) {
    font-size: 1.5rem;
  }

  @media (min-width: 992px) {
    font-size: 1.625rem;
  }
`

export const AltBoxesDescription = styled.p``
