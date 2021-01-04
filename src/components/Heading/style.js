import styled from 'styled-components'

export const HeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: calc(5vw + 6px);

  @media (min-width: 576px) {
    margin-bottom: calc(7vw + 6px);
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }

  @media (min-width: 992px) {
    margin-bottom: 4.725rem;
  }

  @media (min-width: 1200px) {
    margin-bottom: 6.25rem;
  }
`

export const HeadingHead = styled.h2`
  margin: 0 auto 1.25rem;
  color: var(--themeDark);

  @media (max-width: 375.98px) {
    width: 90%;
  }

  @media (max-width: 575.98px) {
    width: 85%;
  }

  @media (max-width: 576px) {
    font-size: calc(1.125rem + 0.6vw);
  }

  @media (min-width: 576px) {
    width: 78%;
  }

  @media (min-width: 768px) {
    width: 72%;
  }

  @media (min-width: 992px) {
    width: 62%;
  }

  @media (min-width: 1200px) {
    width: 55%;
  }
`
export const HeadingInfo = styled.p`
  width: 56%;
  margin: 0 auto;
  color: var(--theme);
  font-size: calc(1rem + 0.33vw);
`
