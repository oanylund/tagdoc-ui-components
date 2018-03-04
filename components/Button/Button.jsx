import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import {
  mainVariants,
  lighten,
  darken,
  disabledColor,
  compose2,
  ifElse,
  when
} from "../../themes/helpers";
import { colorVariants } from "../../themes/commonVariants";

const { btnColor, btnColorPropTypes } = mainVariants("btnColor", colorVariants, true);

const { btnSize, btnSizePropTypes } = mainVariants("btnSize", {
  small: "font-size: 0.75em;",
  normal: `
    font-size: 0.8em;
    padding: 8px 10px;
  `,
  large: `
    font-size: 1em;
    padding: 10px 15px;
  `
}, true);

const btnLightColor = compose2(lighten(0.2), btnColor);
const btnDarkColor = compose2(darken(0.2), btnColor);
const btnDisabledColor = compose2(disabledColor, btnColor);

const ifActiveOrElse = ifElse(p => p.active);
const onlyWhenNotActive = when(p => !p.active);

const { btnStyle, btnStylePropTypes } = mainVariants("btnStyle", {
  filled: css`
    background-color: ${ifActiveOrElse(btnDarkColor, btnColor)};
    border-color: ${ifActiveOrElse(btnDarkColor, btnColor)};
    color: white;

    ${onlyWhenNotActive`
    &:hover {
        background-color: ${btnLightColor};
        border-color: ${btnLightColor};
    }
  `} &:active {
      background-color: ${btnDarkColor};
      border-color: ${btnDarkColor};
    }

    &:disabled {
      background-color: ${btnDisabledColor};
      border-color: ${btnDisabledColor};
    }
  `,

  outlined: css`
    background-color: transparent;
    border-color: ${ifActiveOrElse(btnDarkColor, btnColor)};
    color: ${ifActiveOrElse(btnDarkColor, btnColor)};

    ${onlyWhenNotActive`
    &:hover {
      border-color: ${btnLightColor};
      background-color: transparent;
      color: ${btnLightColor};
    }
  `} &:active {
      border-color: ${btnDarkColor};
      background-color: transparent;
      color: ${btnDarkColor};
    }

    &:disabled {
      border-color: ${btnDisabledColor};
      background-color: transparent;
      color: ${btnDisabledColor};
    }
  `
}, true);

const Button = styled.button`
  font-family: roboto-regular, sans-serif;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  text-transform: uppercase;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:disabled {
    cursor: default;
    pointer-events: none;
  }

  ${btnSize} 
  ${btnStyle}
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
