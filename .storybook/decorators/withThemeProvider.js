import React from "react";
import ThemeProvider from "../../src/theme/ThemeProvider";

export default theme => story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
);
