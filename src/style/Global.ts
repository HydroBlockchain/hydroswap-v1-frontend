import { backgroundColor } from 'common/styles/variables'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${backgroundColor}; /*this is App background color*/
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
