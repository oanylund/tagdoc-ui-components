import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { variants } from "../../theme/helpers";
import { ifElse } from "../../utils";
import { stateColorVariants, grayColorVariants } from "../../theme/selectors";

import TextInputElement from "./TextInputElement";

let nextId = 0;

const labelColor = variants("inputState", {
  default: grayColorVariants("darker"),
  success: stateColorVariants("success"),
  danger: stateColorVariants("danger"),
  warning: stateColorVariants("warning")
});

const fontSize = variants("size", {
  small: "0.9em",
  normal: "1em",
  large: "1.2em"
});

const ifLabelExistsOrElse = ifElse(p => p.label);
const ifExpandOnFocusOrElse = ifElse(p => p.expandOnFocus);

const height = ifLabelExistsOrElse(
  ifExpandOnFocusOrElse("3.065em", "auto"),
  ifExpandOnFocusOrElse("2.2em", "auto")
);

const TextInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${fontSize};
  height: ${height};
  font-family: roboto-regular;
  margin-bottom: 0.3em;

  & > label {
    font-size: 0.79em;
    color: ${labelColor};
    user-select: none;
    pointer-events: none;
    text-transform: capitalize;
  }
`;

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.inputId = `input-${nextId++}`;
    this._getInputRef = this._getInputRef.bind(this);
  }
  _getInputRef(ref) {
    this.inputRef = ref;
    if (this.props.inputRef) this.props.inputRef(ref);
  }
  render() {
    const {
      className,
      label,
      size,
      inputRef,
      ...inputElementProps
    } = this.props;
    const { expandOnFocus, inputState } = inputElementProps;

    return (
      <TextInputStyled
        className={className}
        size={size}
        inputState={inputState}
        label={label}
        expandOnFocus={expandOnFocus}
      >
        {label && <label htmlFor={this.inputId}>{label}</label>}
        <TextInputElement
          id={this.inputId}
          innerRef={this._getInputRef}
          {...inputElementProps}
        />
      </TextInputStyled>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  expandOnFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  showBorderBottom: PropTypes.bool,
  inputRef: PropTypes.func,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["small", "normal", "large"]),
  inputState: PropTypes.oneOf(["default", "success", "danger", "warning"])
};

TextInput.defaultProps = {
  expandOnFocus: false,
  disabled: false,
  showBorderBottom: true,
  size: "normal",
  inputState: "default",
  spellCheck: false
};

export default TextInput;
