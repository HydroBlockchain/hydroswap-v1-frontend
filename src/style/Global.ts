import { createGlobalStyle } from 'styled-components'

// @ts-ignore
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => {
      // @ts-ignore
      return theme.colors.background
    }};
    background: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
