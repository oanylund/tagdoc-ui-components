import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import centerDecorator from "../../.storybook/decorators/centerDecorator";

import Card from "./Card";

storiesOf("Card", module)
  .addDecorator(centerDecorator)
  .add("default", () => (
    <div style={{ width: "400px" }}>
      <Card>Hello<br/>Cool</Card>
    </div>
  ));
