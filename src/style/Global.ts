import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => {
      // @ts-ignore
      return theme.colors.background
    }};
    background: #212124;
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
