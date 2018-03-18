import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs/react";
import centerDecorator from "../../../.storybook/decorators/centerDecorator";

import Button from "./Button";

storiesOf("Buttons", module)
  .addDecorator(withKnobs)
  .addDecorator(centerDecorator)
  .add("Button", () => {
    const colorOpts = {
      default: "default",
      success: "success",
      danger: "danger",
      warning: "warning"
    };

    const sizeOpts = {
      small: "small",
      normal: "normal",
      large: "large"
    };

    const styleOpts = {
      filled: "filled",
      outlined: "outlined"
    };

    const props = {
      btnColor: select("btnColor", colorOpts, "default", "gp1"),
      btnSize: select("btnSize", sizeOpts, "normal", "gp1"),
      btnStyle: select("btnStyle", styleOpts, "outlined", "gp1"),
      active: boolean("active", false, "gp1"),
      disabled: boolean("disabled", false, "gp1")
    };

    const btnText = text("Button text", "Button", "gp2");

    return (
      <Button {...props} onClick={action("onClick")}>
        {btnText}
      </Button>
    );
  });
