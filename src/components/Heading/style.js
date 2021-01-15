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
    max-width: 66.6666666667%;
  }
`

export const HeadingHead = styled.h2`
  margin: 0 auto 1.25rem;
  color: var(--themeDark);

  .dark & {
    color: #fff;
  }

  @media (max-width: 576px) {
    font-size: calc(1.125rem + 0.6vw);
  }
`

export const HeadingInfo = styled.p`
  color: var(--theme);
  font-size: calc(1rem + 0.15vw);

  .dark & {
    color: hsla(0, 0%, 100%, 0.75);
  }
`
