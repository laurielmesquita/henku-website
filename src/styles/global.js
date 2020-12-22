import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset-advanced'

const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
    --container: 1386px;
    --brand: #4453a6;
    --highlight: #526af2;
    --theme: #5D6494;
    --themeDark: #414771;
    --visited: #5d6494;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, sans-serif, "Apple Color Emoji";
    font-weight: 400;
  }

  a {
    transition: color 0.3s;
    
    &:not([class]) {
      text-decoration-skip-ink: auto;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: calc(4% + .3rem);
  }

  h1 {
    font-size: calc(1.375rem + 1.5vw);
  }
  h2 {
    font-size: calc(1.325rem + .9vw);
  }
  h3 {
    font-size: calc(1.3rem + .6vw);
  }
  h4 {
    font-size: calc(1.275rem + .3vw);
  }
  h5 {
    font-size: 1.25rem;
  }
  h6 {
    font-size: 1rem;
  }
`
export default GlobalStyles
