// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #f0f2f5;
    font-family: "Cabin", sans-serif;
    color: #333;
  }

  h1 {
    color: #000;
    text-align: center;
    font-family: Cabin;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  p {
    color: #727272;
    text-align: center;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 24px */
  }


  }
`;

export default GlobalStyles;
