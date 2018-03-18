import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import centerDecorator from "../../../.storybook/decorators/centerDecorator";

import Title from "./Title";

storiesOf("Title", module)
  .addDecorator(centerDecorator)
  .add("Sizes", () => (
    <div>
      <Title size="small">Small Title</Title>
      <Title size="normal">Normal Title</Title>
      <Title size="large">Large Title</Title>
    </div>
  ));
