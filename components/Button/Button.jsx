import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import {
  variants,
  getThemeProp,
  lighten,
  darken,
  disabledColor
} from "../../theme/helpers";
import { stateColorVariants } from "../../theme/selectors";

import { compose2, ifElse } from "../../utils";

const btnColor = variants("btnColor", {
  default: stateColorVariants("default"),
  success: stateColorVariants("success"),
  danger: stateColorVariants("danger"),
  warning: stateColorVariants("warning")
});

const fontSize = variants("btnSize", {
  small: "0.6em",
  normal: "0.8em",
  large: "1em"
});

const btnLightColor = compose2(lighten(0.2), btnColor);
const btnDarkColor = compose2(darken(0.2), btnColor);
const btnDisabledColor = compose2(disabledColor, btnColor);

const ifActiveOrElse = ifElse(p => p.active);

const backgroundColor = variants("btnStyle", {
  filled: ifActiveOrElse(btnDarkColor, btnColor),
  outlined: "transparent"
});

const backgroundColorHovered = variants("btnStyle", {
  filled: ifActiveOrElse(btnDarkColor, btnLightColor),
  outlined: "transparent"
});

const backgroundColorActive = variants("btnStyle", {
  filled: btnDarkColor,
  outlined: "transparent"
});

const backgroundColorDisabled = variants("btnStyle", {
  filled: btnDisabledColor,
  outlined: "transparent"
});

const color = variants("btnStyle", {
  filled: "white",
  outlined: ifActiveOrElse(btnDarkColor, btnColor)
});

const colorHovered = variants("btnStyle", {
  filled: "white",
  outlined: ifActiveOrElse(btnDarkColor, btnLightColor)
});

const colorActive = variants("btnStyle", {
  filled: "white",
  outlined: btnDarkColor
});

const colorDisabled = variants("btnStyle", {
  filled: "white",
  outlined: btnDisabledColor
});

const Button = styled.button`
  font-family: roboto-regular, sans-serif;
  font-size: ${fontSize};
  border-width: 1px;
  padding: 0.625em 0.935em;
  border-style: solid;
  cursor: pointer;
  text-transform: uppercase;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  background-color: ${backgroundColor};
  border-color: ${ifActiveOrElse(btnDarkColor, btnColor)};
  color: ${color};

  &:hover {
    background-color: ${backgroundColorHovered};
    border-color: ${ifActiveOrElse(btnDarkColor, btnLightColor)};
    color: ${colorHovered};
  }

  &:active {
    background-color: ${backgroundColorActive};
    border-color: ${btnDarkColor};
    color: ${colorActive};
  }

  &:disabled {
    background-color: ${backgroundColorDisabled};
    border-color: ${btnDisabledColor};
    color: ${colorDisabled};

    cursor: default;
    pointer-events: none;
  }
`;

Button.propTypes = {
  btnColor: PropTypes.oneOf(["default", "success", "danger", "warning"]),
  btnSize: PropTypes.oneOf(["small", "normal", "large"]),
  btnStyle: PropTypes.oneOf(["filled", "outlined"]),
  active: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  btnColor: "default",
  btnSize: "normal",
  btnStyle: "outlined",
  active: false,
  disabled: false
};

export default Button;
