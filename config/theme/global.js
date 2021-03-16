import { createGlobalStyle } from "styled-components";

import ThemeDefault from "./default";

const theme = ThemeDefault;

const GlobalStyle = createGlobalStyle` 

:root {
  font-size: 60%;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html,
  body,
  #___gatsby {
    width: 100%;
    display: block;
  }
  
  body {
    background: #f0f0f0;
    margin: 0;
  }
  
  
  body,
  input,
  button,
  textarea {
    font: 500 1.6rem "Montserrat";
  }

  main {
    min-height: 100vh;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: "Josefin Sans", sans-serif;
  }
  
  a {
    text-decoration: none;
    transition: 0.3s;
  }
  
  @media (min-width: 700px) {
    #___gatsby {
      font-size: 62.5%;
    }
  }

`;
export default GlobalStyle;
