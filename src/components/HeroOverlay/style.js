import styled from 'styled-components'

export const HeroMediaOverlay = styled.div`
  z-index: 1;
  width: 100%;
`

export const HeroMediaContent = styled.div`
  color: #fff;
  max-width: 49%;
  margin: 0 auto;
  padding: 3.75rem calc(2.75rem * 2);
  background-color: hsla(0, 0%, 0%, 0.4);
  backdrop-filter: saturate(180%) blur(20px);

  @media (max-width: 575.98px) {
    max-width: 85%;
    padding: 3.75rem calc(1.125rem * 2);
  }
`

export const HeroMediaTitle = styled.h1`
  opacity: 0.95;

  @media (max-width: 575.98px) {
    font-size: calc(1.375rem + 1vw);
  }
`

export const HeroMediaParagraph = styled.p`
  font-size: 1.375rem;
  line-height: 1.4;
  padding: 0 3.75rem;
  opacity: 0.83;
  margin-bottom: 2.5rem;

  @media (max-width: 575.98px) {
    font-size: calc(1.375rem - 0.7vw);
    padding: 0;
  }
`
