import React from "react";
import { ThemeProvider } from "styled-components";

export default theme => story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
);
