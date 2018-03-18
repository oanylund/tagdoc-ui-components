import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs/react";
import centerDecorator from "../../../.storybook/decorators/centerDecorator";
import withSelectableBackground from "../../hoc/withSelectableBackground";

import Card from "./Card";
import Button from "../Button/Button";

const SelectableCard = withSelectableBackground()(Card);

storiesOf("Card", module)
  .addDecorator(withKnobs)
  .addDecorator(centerDecorator)
  .add("Simple", () => (
    <div style={{ width: "400px" }}>
      <Card>
        Hello<br />Cool
      </Card>
    </div>
  ))
  .add("withSelectableBackground()", () => {
    return (
      <div style={{ width: "400px" }}>
        <SelectableCard selected={boolean("selected", false)}>
          <p>
            Hello<br />Cool
          </p>
          <Button btnStyle="outlined">try me</Button>
        </SelectableCard>
      </div>
    );
  });
