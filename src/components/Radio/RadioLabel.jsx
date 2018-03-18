import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten, variants } from "../../theme/helpers";
import { baseColor, stateColorVariants } from "../../theme/selectors";
import { compose2, whenTrueApplyStyles } from "../../utils";

import RadioInput from "./RadioInput";

const radioColor = variants("radioColor", {
  default: stateColorVariants("default"),
  success: stateColorVariants("success"),
  danger: stateColorVariants("danger"),
  warning: stateColorVariants("warning")
});

const fontSize = variants("size", {
  small: "0.75em",
  normal: "1em",
  large: "1.25em"
});

const noText = p => !p.children;
const noTextStyles = `
    width: 1em;
    height: 1em;
    padding-left: 0;
    margin: 0;
`;
const whenNoText = whenTrueApplyStyles(noText, noTextStyles);

const RadioLabel = styled.label`
  position: relative;
  padding-left: 1.75em;
  margin: 0.2em 0;
  cursor: pointer;
  line-height: 1em;
  display: block;
  color: black;
  font-size: ${fontSize};
  ${whenNoText};

  &:before {
    content: "";
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 0;
    width: 1em;
    height: 1em;
    border: 1px solid ${radioColor};
    border-radius: 100%;
    background: transparent;
  }

  &:hover:before {
    border-color: ${compose2(darken(0.35), radioColor)};
  }

  &:hover {
    color: #595959;
  }

  &:after {
    content: "";
    position: absolute;
    box-sizing: border-box;
    top: 0.25em;
    left: 0.25em;
    width: 0.5em;
    height: 0.5em;
    background: ${radioColor};
    border-radius: 100%;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  ${RadioInput}:not(:checked) + &:after {
    opacity: 0;
    transform: scale(0);
  }

  ${RadioInput}:checked + &:after {
    opacity: 1;
    transform: scale(1);
  }

  ${RadioInput}:disabled + & {
    cursor: default;
    color: #555;
  }

  ${RadioInput}:disabled + &:before {
    border-color: #555;
  }

  ${RadioInput}:disabled + &:after {
    background: #888;
  }
`;

export default RadioLabel;
