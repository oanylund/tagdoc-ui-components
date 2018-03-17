import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import RadioInput from "./RadioInput";
import RadioLabel from "./RadioLabel";

let nextId = 0;

const RadioStyled = styled.div`
  user-select: none;
`;

class Radio extends Component {
  constructor(props) {
    super(props);
    this.radioId = `radio-${nextId++}`;
    this._handleChange = this._handleChange.bind(this);
  }
  _handleChange(e) {
    if (this.props.onChange) this.props.onChange(this.props.value);
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
      <RadioStyled>
        <RadioInput
          id={this.radioId}
          name={groupName}
          value={value}
          disabled={disabled}
          checked={checked}
          onChange={this._handleChange}
        />
        <RadioLabel htmlFor={this.radioId} {...variants}>
          {text}
        </RadioLabel>
      </RadioStyled>
    );
  }
}

export const radioPropTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  value: PropTypes.any,
  groupName: PropTypes.string,
  onChange: PropTypes.func,
  //Variants
  size: PropTypes.oneOf(["small", "normal", "large"]),
  radioColor: PropTypes.oneOf(["default", "success", "danger", "warning"])
};

Radio.propTypes = radioPropTypes;

Radio.defaultProps = {
  checked: false,
  disabled: false,
  size: "normal",
  radioColor: "default"
};

export default Radio;
