import { addDecorator } from "@storybook/react";
import withThemeProvider from "./decorators/withThemeProvider";
import defaultTheme from "../src/theme";

addDecorator(withThemeProvider(defaultTheme));
