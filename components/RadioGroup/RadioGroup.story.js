import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import centerDecorator from "../../.storybook/decorators/centerDecorator";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs/react";
import RadioGroup from "./RadioGroup";
import Radio from "../Radio/Radio";

class ManageState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: undefined
    };
    this._handleChange = this._handleChange.bind(this);
  }
  _handleChange(val) {
    action("changeState")(val);
    this.setState({
      selectedValue: val
    });
  }
  render() {
    return this.props.children(this.state.selectedValue, this._handleChange);
  }
}

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

const orientationOpts = {
  vertical: "vertical",
  horizontal: "horizontal"
};

const overrideProps = () => ({
  disabled: boolean("disabled", false, "gp1"),
  size: select("size", sizeOpts, "normal", "gp1"),
  radioColor: select("radioColor", colorOpts, "default", "gp1")
});

const groupProps = () => ({
  orientation: select("orientation", orientationOpts, "vertical", "gp2")
});

const merge = (a, b) => ({ ...a, ...b });

const createProps = useChildStyles =>
  useChildStyles ? merge(groupProps(), overrideProps()) : groupProps();

storiesOf("RadioGroup", module)
  .addDecorator(centerDecorator)
  .addDecorator(withKnobs)
  .add("Group - children", () => {
    const useChildStyles = boolean("override child styles", false, "gp1");
    const props = createProps(useChildStyles);

    return (
      <ManageState>
        {(selectedValue, onChange) => (
          <RadioGroup
            selectedValue={selectedValue}
            onChange={onChange}
            name="gp1"
            {...props}
          >
            <Radio text="Option 1 (large)" value={1} size="large" />
            <Radio text="Option 2 (success)" value={2} radioColor="success" />
            <Radio text="Option 3 (disabled)" value={3} disabled />
          </RadioGroup>
        )}
      </ManageState>
    );
  })
  .add("Group - options", () => {
    const useChildStyles = boolean("override child styles", false, "gp1");
    const props = createProps(useChildStyles);

    const radioOptions = [
      { text: "Option 1 (large)", value: 1, size: "large" },
      { text: "Option 2 (danger)", value: 2, radioColor: "danger" },
      { text: "Option 3 (disabled)", value: 3, disabled: true }
    ];

    return (
      <ManageState>
        {(selectedValue, onChange) => (
          <RadioGroup
            selectedValue={selectedValue}
            onChange={onChange}
            name="gp1"
            options={radioOptions}
            {...props}
          />
        )}
      </ManageState>
    );
  });
