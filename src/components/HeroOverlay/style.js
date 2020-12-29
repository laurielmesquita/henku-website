import styled from 'styled-components'

export const HeroMediaOverlay = styled.div`
  z-index: 1;
  width: 100%;
`

export const HeroMediaContent = styled.div`
  color: #fff;

  margin: 0 auto;
  background-color: hsla(0, 0%, 0%, 0.4);
  backdrop-filter: saturate(180%) blur(20px);

  @media (max-width: 1199.98px) {
    max-width: 65%;
    padding: 3.75rem calc(1.725rem * 2);
  }

  @media (max-width: 991.98px) {
    max-width: 80%;
    padding: 3.75rem calc(1.125rem * 2);
  }

  @media (max-width: 767.98px) {
  }

  @media (max-width: 575.98px) {
    max-width: 85%;
    padding: 3.5rem calc(1.125rem * 2);
  }

  @media (max-width: 375.98px) {
    padding: 2.3rem 1.75rem;
  }

  @media (min-width: 1200px) {
    max-width: 66%;
    padding: 3.75rem calc(2.125rem * 2);
  }

  @media (min-width: 1386px) {
    max-width: 56%;
  }
`

export const HeroMediaTitle = styled.h1`
  opacity: 0.95;

  @media (max-width: 575.98px) {
    font-size: calc(1.375rem + 1vw);
  }

  @media (max-width: 375.98px) {
    margin-bottom: 1.375rem;
    font-size: calc(1.2rem + 0.5vw);
  }
`

export const HeroMediaParagraph = styled.p`
  font-size: 1.375rem;
  line-height: 1.4;
  padding: 0 3.75rem;
  opacity: 0.83;
  margin-bottom: 2.5rem;

  @media (max-width: 375.98px) {
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  @media (max-width: 575.98px) {
    font-size: calc(1.375rem - 0.7vw);
    padding: 0;
  }

  @media (min-width: 1386px) {
    padding: 0 2.25rem;
  }
`
