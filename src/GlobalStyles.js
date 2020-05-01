import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Futura Bold';
    src: url('./fonts/Futura-Bold.ttf');
  }

  @font-face {
    font-family: 'Futura Book';
    src: url('./fonts/Futura-Book.ttf');
  }

  * {
    box-sizing: border-box !important;
  }

  html {
    font-size: 62.5%
  }

  body {
    margin: 0;
    font-family: 'Futura Book', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.4rem;
    background: #000;
    color: #fff;
  }

  h1,
  h2,
  h3 {
    font-family: 'Futura Bold', sans-serif;
  }

  /* SCROLLBAR */

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    z-index: 2;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
    z-index: 2;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(206, 152, 41);
    border-radius: 10px;
    z-index: 2;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(206, 152, 41);
  }
`;

export default GlobalStyles;
