import { createGlobalStyle } from 'styled-components'
import 'typeface-inter'
import 'normalize.css'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

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
    font-family: Inter, 'sans-serif';
    overflow: hidden;
  }

  #root {
    position: absolute;
    height: 100%;
    width: 100%;
  }
`
