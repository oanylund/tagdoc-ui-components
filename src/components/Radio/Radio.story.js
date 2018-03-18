import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs/react";
import centerDecorator from "../../../.storybook/decorators/centerDecorator";

import Radio from "./Radio";

storiesOf("Radio", module)
  .addDecorator(withKnobs)
  .addDecorator(centerDecorator)
  .add("Props", () => {
    const sizeOpts = {
      small: "small",
      normal: "normal",
      large: "large"
    };

    const colorOpts = {
      default: "default",
      success: "success",
      danger: "danger",
      warning: "warning"
    };

    const props = {
      text: text("text", "Option 1", "gp1"),
      value: text("value", "amazing", "gp1"),
      checked: boolean("checked", false, "gp1"),
      disabled: boolean("disabled", false, "gp1"),
      onChange: action("onChange"),
      // Variants
      size: select("size", sizeOpts, "normal", "gp1"),
      radioColor: select("radioColor", colorOpts, "default", "gp1")
    };

    return <Radio {...props} groupName="radio-group" />;
  });
