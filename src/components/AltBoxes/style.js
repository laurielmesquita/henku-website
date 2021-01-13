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

    &:nth-child(even) {
      div {
        &:before {
          bottom: -5px;
          right: -5px;
        }

        img {
          top: -15px;
          left: -15px;
        }
      }
    }

    &:nth-child(even):hover {
      div {
        &:before {
          bottom: -15px;
          right: -15px;
        }
      }
    }

    & div:nth-child(1) {
      padding: 15px;
    }

    & div:nth-child(2) {
      margin-left: auto;
    }

    &:nth-child(odd) {
      div {
        &:before {
          bottom: -5px;
          left: -5px;
        }

        img {
          top: -15px;
          right: -15px;
        }
      }
    }

    &:nth-child(odd):hover {
      div {
        &:before {
          bottom: -15px;
          left: -15px;
        }
      }
    }

    &:nth-child(even):hover,
    &:nth-child(odd):hover {
      div {
        &:before {
          background-color: var(--highlight);
        }
      }
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
    z-index: 1;

    &:before {
      position: relative;
      content: '';
      display: inline-table;
      width: 100%;
      height: 100%;
      background-color: var(--theme);
      z-index: -1;
      transition: all 0.3s ease-in-out;
    }

    img {
      position: relative;
    }
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
