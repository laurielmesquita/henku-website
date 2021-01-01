import styled from 'styled-components'

export const HeroMediaWrapper = styled.section`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  text-align: center;
  padding: calc(5vh + 6px) 0;
  margin: 0 auto;
  background-color: var(--deepDark);

  @media (min-width: 576px) {
    padding: calc(7vh + 6px) 0;
  }

  @media (min-width: 768px) {
    padding: calc(10vh + 6px) 0;
  }

  @media (min-width: 992px) {
    padding: calc(13vh + 6px) 0;
  }

  @media (min-width: 1200px) {
    padding: calc(13vh + 6px) 0;
  }
`

export const HeroMediaSource = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
`
