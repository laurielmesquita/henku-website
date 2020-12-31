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
    padding: 3.75rem calc(2.25rem);
  }

  @media (min-width: 992px) {
    max-width: 70%;
    padding: 3.75rem calc(1.725rem * 2);
  }

  @media (min-width: 1200px) {
    max-width: 66%;
    padding: 3.75rem calc(3.45rem);
  }

  @media (min-width: 1386px) {
    max-width: 56%;
    padding: 3.75rem calc(4.25rem);
  }

  @media (min-width: 1685px) {
    max-width: 49%;
    padding: 3.75rem calc(5.5rem);
  }
`

export const HeroMediaTitle = styled.h1`
  opacity: 0.95;
  margin-bottom: 1.25rem;
  font-size: calc(1.275rem + 0.5vw);
  line-height: 1.3;

  @media (min-width: 376px) {
    font-size: calc(1.375rem + 0.8vw);
  }

  @media (min-width: 576px) {
    font-size: calc(1.375rem + 1vw);
  }

  @media (min-width: 768px) {
    font-size: calc(1.375rem + 1.5vw);
  }

  @media (min-width: 992px) {
    font-size: calc(1.375rem + 1.5vw);
  }
`

export const HeroMediaParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  opacity: 0.83;

  @media (min-width: 576px) {
    margin-bottom: 2.75rem;
    font-size: calc(1.375rem - 0.7vw);
  }

  @media (min-width: 768px) {
    padding: 0px 1.75rem;
    font-size: calc(1.375rem - 0.3vw);
  }

  @media (min-width: 992px) {
    font-size: calc(1.375rem - 0.1vw);
    padding: 0px 2rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.375rem;
    padding: 0px 2.25rem;
  }
`
