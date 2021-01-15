import styled from 'styled-components'

export const HeadingWrapper = styled.div`
  text-align: center;
  margin: 0 auto 3.75rem;

  @media (min-width: 576px) {
    max-width: 83.3333333333%;
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }

  @media (min-width: 992px) {
    margin-bottom: 4.725rem;
  }

  @media (min-width: 1200px) {
    margin-bottom: 6.25rem;
    max-width: 100%;
  }
`

export const HeadingHead = styled.h2`
  color: var(--deepDark);
  font-size: calc(1.4125rem + 1.95vw);

  .dark & {
    color: #fff;
  }

  @media (min-width: 1200px) {
    font-size: 2.875rem;
  }
`

export const HeadingInfo = styled.p`
  color: var(--theme);
  font-size: 1.125rem;

  .dark & {
    color: hsla(0, 0%, 100%, 0.75);
  }
`
