import { createGlobalStyle } from 'styled-components'
import 'typeface-inter'
import 'normalize.css'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  @media (max-width: 425px) {
    html {
      font-size: 12px;
    }
  }

  body {
    background-color: #f4f4f4;
    font-family: Inter, 'sans-serif'
  }
`
