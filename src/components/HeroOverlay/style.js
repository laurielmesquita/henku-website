import styled from 'styled-components'

export const HeroMediaOverlay = styled.div`
  z-index: 1;
  width: 100%;
`

export const HeroMediaContent = styled.div`
  color: #fff;
  max-width: 85%;
  margin: 0 auto;
  padding: 2.3rem 1.75rem;
  background-color: hsla(0, 0%, 0%, 0.4);
  backdrop-filter: saturate(180%) blur(20px);

  @media (min-width: 576px) {
    max-width: 85%;
    padding: 2.8rem 2.3rem;
  }

  @media (min-width: 768px) {
    max-width: 80%;
    padding: 3.75rem;
  }

  @media (min-width: 992px) {
    width: 66.6666666667%;
  }

  @media (min-width: 1200px) {
    width: 58.3333333333%;
  }

  @media (min-width: 1386px) {
    padding: 4.25rem;
  }

  @media (min-width: 1685px) {
    padding: 5.5rem;
  }
`

export const HeroMediaTitle = styled.h1`
  opacity: 0.95;
  font-size: calc(1.85rem + 0.5vw);

  @media (min-width: 452px) {
    font-size: calc(1.525rem + 3.3vw);
  }

  @media (min-width: 1386px) {
    font-size: calc(1.525rem + 3vw);
  }
`

export const HeroMediaParagraph = styled.p`
  font-size: calc(1rem + 0.15vw);
  line-height: 1.4;
  margin-bottom: 2rem;
  opacity: 0.83;

  @media (min-width: 576px) {
    margin-bottom: 2.75rem;
  }
`
