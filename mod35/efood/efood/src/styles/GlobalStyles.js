import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #fff6f2;
    color: #333;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle
