import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import {
  variants,
  getThemeProp,
  getComponentThemePath,
  lighten,
  darken,
  disabledColor
} from "../../theme/helpers";
import { compose2, concat, prop, ifElse } from "../../utils";

const buttonThemePath = getComponentThemePath("button");
const mainColors = compose2(
  getThemeProp,
  concat([...buttonThemePath, ])
)
const fontSizes = getSubProperty(buttonTheme(["fontSize"]));

const btnColor = variants("btnColor", {
  default: mainColors("default"),
  success: mainColors("success"),
  danger: mainColors("danger"),
  warning: mainColors("warning")
});

const fontSize = variants("btnSize", {
  small: fontSizes("small"),
  normal: fontSizes("normal"),
  large: fontSizes("large")
});

const btnLightColor = compose2(lighten(0.2), btnColor);
const btnDarkColor = compose2(darken(0.2), btnColor);
const btnDisabledColor = compose2(disabledColor, btnColor);

const ifActiveOrElse = ifElse(p => p.active);

const backGroundColor = variants("btnStyle", {
  filled: ifActiveOrElse(btnDarkColor, btnColor),
  outlined: "transparent"
});

const backGroundColorHovered = variants("btnStyle", {
  filled: ifActiveOrElse(btnDarkColor, btnLightColor),
  outlined: "transparent"
});

const backGroundColorActive = variants("btnStyle", {
  filled: btnDarkColor,
  outlined: "transparent"
});

const backGroundColorDisabled = variants("btnStyle", {
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

  background-color: ${backGroundColor};
  border-color: ${ifActiveOrElse(btnDarkColor, btnColor)};
  color: ${color};

  &:hover {
    background-color: ${backGroundColorHovered};
    border-color: ${ifActiveOrElse(btnDarkColor, btnLightColor)};
    color: ${colorHovered};
  }

  &:active {
    background-color: ${backGroundColorActive};
    border-color: ${btnDarkColor};
    color: ${colorActive};
  }

  &:disabled {
    background-color: ${backGroundColorDisabled};
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
