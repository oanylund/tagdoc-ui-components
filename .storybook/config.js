import { configure, addDecorator } from "@storybook/react";
import withThemeProvider from "./decorators/withThemeProvider";
import defaultTheme from "../src/theme";
import { injectGlobal } from "styled-components";

injectGlobal`
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

const req = require.context("../src/components", true, /.story.jsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withThemeProvider(defaultTheme));

configure(loadStories, module);
