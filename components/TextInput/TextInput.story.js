import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs/react";
import centerDecorator from "../../.storybook/decorators/centerDecorator";

import Card from "../Card/Card";
import TextInput from "./TextInput";
import Title from "../Title/Title";

const FixedCard = Card.extend`
  width: 500px;
`;

storiesOf("TextInput", module)
  .addDecorator(withKnobs)
  .addDecorator(centerDecorator)
  .add("Props", () => {
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

    const props = {
      value: text("value", "", "gp1"),
      label: text("label", "label", "gp1"),
      placeholder: text("placeholder", "I am a placeholder", "gp1"),
      size: select("size", sizeOpts, "normal", "gp1"),
      expandOnFocus: boolean("expandOnFocus", false, "gp1"),
      disabled: boolean("disabled", false, "gp1"),
      showBorderBottom: boolean("showBorderBottom", true, "gp1"),
      onChange: action("onChange")
    };
    return (
      <FixedCard>
        <TextInput {...props} />
      </FixedCard>
    );
  })
  .add("Sizes", () => (
    <FixedCard>
      <Title>Sizes</Title>
      <TextInput label="small" placeholder="I am a small input" size="small" />
      <TextInput
        label="normal"
        placeholder="I am a normal input"
        size="normal"
      />
      <TextInput label="large" placeholder="I am a large input" size="large" />
    </FixedCard>
  ));
