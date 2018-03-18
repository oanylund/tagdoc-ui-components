import React from "react";
import ThemeProvider from "../../theme/ThemeProvider";

export default theme => story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
);
