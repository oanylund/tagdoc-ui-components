import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs/react";

import Modal from "./Modal";
import Card from "../Card/Card";

storiesOf("Modal", module)
  .addDecorator(withKnobs)
  .add("Props", () => (
    <Modal show={boolean("show", true)} onBackgroundClick={action("bgClick")}>
      {props => <Card {...props}>Hellooo</Card>}
    </Modal>
  ));
