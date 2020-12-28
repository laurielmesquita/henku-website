import styled from 'styled-components'

export const HeroMediaWrapper = styled.section`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  padding: calc(10vw + 6px) 0;
  margin: 0 auto;
  background-color: var(--deepDark);
`

export const HeroMediaSource = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  z-index: 0;
`
