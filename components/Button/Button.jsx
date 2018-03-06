import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import {
  mainVariants,
  lighten,
  darken,
  disabledColor,
  compose2,
  ifElse
} from "../../themes/helpers";
import { colorVariants } from "../../themes/commonVariants";

const { btnColor, btnColorPropTypes } = mainVariants(
  "btnColor",
  colorVariants,
  true
);

const { btnSize: fontSize, btnSizePropTypes } = mainVariants(
  "btnSize",
  {
    small: "0.6em",
    normal: "0.8em",
    large: "1em"
  },
  true
);

const btnLightColor = compose2(lighten(0.2), btnColor);
const btnDarkColor = compose2(darken(0.2), btnColor);
const btnDisabledColor = compose2(disabledColor, btnColor);

const ifActiveOrElse = ifElse(p => p.active);

const { btnStyle: backGroundColor, btnStylePropTypes } = mainVariants(
  "btnStyle",
  {
    filled: ifActiveOrElse(btnDarkColor, btnColor),
    outlined: "transparent"
  },
  true
);

const backGroundColorHovered = mainVariants("btnStyle", {
  filled: ifActiveOrElse(btnDarkColor, btnLightColor),
  outlined: "transparent"
});

const backGroundColorActive = mainVariants("btnStyle", {
  filled: btnDarkColor,
  outlined: "transparent"
});

const backGroundColorDisabled = mainVariants("btnStyle", {
  filled: btnDisabledColor,
  outlined: "transparent"
});

const color = mainVariants("btnStyle", {
  filled: "white",
  outlined: ifActiveOrElse(btnDarkColor, btnColor)
});

const colorHovered = mainVariants("btnStyle", {
  filled: "white",
  outlined: ifActiveOrElse(btnDarkColor, btnLightColor)
});

const colorActive = mainVariants("btnStyle", {
  filled: "white",
  outlined: btnDarkColor
});

const colorDisabled = mainVariants("btnStyle", {
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
  btnColor: btnColorPropTypes,
  btnSize: btnSizePropTypes,
  btnStyle: btnStylePropTypes,
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
