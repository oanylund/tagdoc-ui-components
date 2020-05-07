import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs";
import centerDecorator from "../../../.storybook/decorators/centerDecorator";

import Card from "../Card/Card";
import TextInput from "./TextInput";
import Title from "../Title/Title";

const FixedCard = styled(Card)`
  width: 500px;
`;

storiesOf("TextInput", module)
  .addDecorator(withKnobs)
  .addDecorator(centerDecorator)
  .add("Props", () => {
    const inputStateOpts = {
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
      value: text("value", ""),
      label: text("label", "label"),
      placeholder: text("placeholder", "I am a placeholder"),
      size: select("size", sizeOpts, "normal"),
      inputState: select("inputState", inputStateOpts, "default"),
      expandOnFocus: boolean("expandOnFocus", false),
      disabled: boolean("disabled", false),
      showBorderBottom: boolean("showBorderBottom", true),
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
