import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import CheckboxInput from "./CheckboxInput";
import CheckboxLabel from "./CheckboxLabel";

let nextId = 0;

const CheckboxStyled = styled.div`
  user-select: none;
`;

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.checkboxId = `checkbox-${nextId++}`;
    this._handleChange = this._handleChange.bind(this);
  }
  _handleChange(e) {
    this.props.onChange({
      nextChecked: e.target.checked,
      value: this.props.value,
      groupName: this.props.groupName
    });
  }
  render() {
    const {
      checked,
      disabled,
      value,
      text,
      groupName,
      onChange,
      ...variants
    } = this.props;
    return (
      <CheckboxStyled>
        <CheckboxInput
          id={this.checkboxId}
          name={groupName}
          value={value}
          disabled={disabled}
          checked={checked}
          onChange={this._handleChange}
        />
        <CheckboxLabel htmlFor={this.checkboxId} {...variants}>
          {text}
        </CheckboxLabel>
      </CheckboxStyled>
    );
  }
}

export const checkboxPropTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  value: PropTypes.any,
  groupName: PropTypes.string,
  onChange: PropTypes.func,
  //Variants
  size: PropTypes.oneOf(["small", "normal", "large"]),
  checkboxColor: PropTypes.oneOf(["default", "success", "danger", "warning"])
};

Checkbox.propTypes = checkboxPropTypes;

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  size: "normal",
  checkboxColor: "default",
  onChange: () => {}
};

export default Checkbox;
