import styled from 'styled-components'

export const HeroMediaWrapper = styled.section`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  text-align: center;
  padding: calc(10vh + 6px) 0;
  margin: 0 auto;
  background-color: var(--deepDark);

  @media (max-width: 320.98px) {
    padding: calc(5vh + 6px) 0;
  }

  @media (max-width: 575.98px) {
    padding: calc(7vh + 6px) 0;
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
