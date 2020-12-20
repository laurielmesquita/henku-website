import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset-advanced'

const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
    --container: 1386px;
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

  a:not([class]) {
    text-decoration-skip-ink: auto;
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
  }
`
export default GlobalStyles
