import React from "react";
import ThemeProvider from "../../src/theme/ThemeProvider";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: roboto-regular;
  src: url("fonts/roboto/Roboto-Regular.ttf");
}

* {
  outline: none;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: roboto-regular, sans-serif;
  background-color: #e4e4e4;
}
`;

export default (theme) => (story) => (
  <ThemeProvider theme={theme}>
    {story()}
    <GlobalStyle />
  </ThemeProvider>
);
