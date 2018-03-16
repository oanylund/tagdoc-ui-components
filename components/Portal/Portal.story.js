import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Card from "../Card/Card";
import Portal from "./Portal";

storiesOf("Portal", module).add("Simple", () => (
  <div>
    <h3>Inside React root div as normal</h3>
    <Portal>
      <Card>
        Rendered in div outside root render using portal. See inspector
      </Card>
    </Portal>
  </div>
));
