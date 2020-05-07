import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs";
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
      btnColor: select("btnColor", colorOpts, "default"),
      btnSize: select("btnSize", sizeOpts, "normal"),
      btnStyle: select("btnStyle", styleOpts, "outlined"),
      active: boolean("active", false),
      disabled: boolean("disabled", false)
    };

    const btnText = text("Button text", "Button");

    return (
      <Button {...props} onClick={action("onClick")}>
        {btnText}
      </Button>
    );
  });
