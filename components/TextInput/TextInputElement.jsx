import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { grayColorVariants } from "../../theme/selectors";
import { whenTrueApplyStyles, ifElse } from "../../utils";

const expandStyles = css`
  transition: all 0.3s;

  &:focus {
    font-size: 1.1em;
    border-bottom: 1px solid ${grayColorVariants("middle")};
  }
`;
const willExpand = p => p.expandOnFocus;
const whenExpandOnFocus = whenTrueApplyStyles(willExpand, expandStyles);

const ifDisabledOrElse = ifElse(p => p.disabled);

const placeholderColor = ifDisabledOrElse(
  grayColorVariants("lighter"),
  grayColorVariants("middle")
);

const textColor = ifDisabledOrElse(grayColorVariants("middle"), "black");

const hideBorderBottomStyle = `
    &:hover, &:focus {
        border: 1px solid transparent;
    }
`;
const hideBorderBottom = whenTrueApplyStyles(
  p => !p.showBorderBottom,
  hideBorderBottomStyle
);

const TextInputElement = styled.input`
  border: 1px solid transparent;
  background: transparent;
  font-size: 0.9em;
  font-family: roboto-regular;
  color: ${textColor};
  padding: 0.3em 0;

  &::placeholder {
    color: ${placeholderColor};
    opacity: 1;
  }

  &:hover {
    border-bottom: 1px solid ${grayColorVariants("light")};
  }

  ${whenExpandOnFocus};
  ${hideBorderBottom};
`;

export default TextInputElement;
