import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs/react";
import centerDecorator from "../../.storybook/decorators/centerDecorator";

import Button from "./Button";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator(centerDecorator)
  .add("Props", () => {
    const colorOpts = {
      default: "default",
      success: "success",
      danger: "danger",
      warning: "warning"
    };

    const styleOpts = {
      transparent: "transparent",
      filled: "filled"
    };

    const sizeOpts = {
      small: "small",
      normal: "normal",
      "large": "large"
    };

    const props = {
      btnColor: select("btnColor", colorOpts, "default", "gp1"),
      btnStyle: select("btnStyle", styleOpts, "transparent", "gp1"),
      btnSize: select("btnSize", sizeOpts, "normal", "gp1"),
      active: boolean("active", false, "gp1")
    };

    const btnText = text("Button text", "Button", "gp2");

    return (
      <Button {...props} onClick={action("onClick")}>
        {btnText}
      </Button>
    );
  });
