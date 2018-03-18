import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import defaultTheme from "../theme";

const ThemeProvider = ({ theme, ...props }) => (
  <StyledThemeProvider theme={theme ? theme : defaultTheme} {...props} />
);

export default ThemeProvider;
