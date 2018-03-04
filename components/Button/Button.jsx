import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { mainVariants, lighten, darken, compose2 } from "../../themes/helpers";

const { btnColor, btnColorPropTypes } = mainVariants("btnColor", {
  default: props => props.theme.main.colors.baseColor,
  success: "green",
  danger: "red",
  warning: "orange"
});

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
});

const btnLightColor = compose2(lighten(0.2), btnColor);
const btnDarkColor = compose2(darken(0.2), btnColor);

const { btnStyle, btnStylePropTypes } = mainVariants("btnStyle", {
  transparent: props => css`
    background-color: transparent;
    color: ${btnColor};

    ${props =>
      props.active
        ? css`
            border-color: ${btnDarkColor};
            color: ${btnDarkColor};
          `
        : css`
            &:hover {
              border-color: ${btnLightColor};
              color: ${btnLightColor};
            }

            &:active {
              border-color: ${btnDarkColor};
              color: ${btnDarkColor};
            }
          `};
  `,

  filled: props => css`
    background-color: ${btnColor};
    color: white;

    ${props =>
      props.active
        ? css`
            background-color: ${btnDarkColor};
            border-color: ${btnDarkColor};
          `
        : css`
            &:hover {
              background-color: ${btnLightColor};
              border-color: ${btnLightColor};
            }

            &:active {
              background-color: ${btnDarkColor};
              border-color: ${btnDarkColor};
            }
          `};
  `
});

const Button = styled.button`
  border-color: ${btnColor};
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  text-transform: uppercase;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${btnSize};
  ${compose2(ilovecoding, btnStyle)};
`;

Button.propTypes = {
  btnColor: btnColorPropTypes,
  btnStyle: btnStylePropTypes,
  btnSize: btnSizePropTypes,
  active: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  btnColor: "default",
  btnStyle: "transparent",
  btnSize: "normal",
  active: false,
  disabled: false
};

export default Button;
