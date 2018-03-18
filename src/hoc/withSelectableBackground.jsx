import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { whenTrueApplyStylesInline, notUndefOrElse, compose2 } from "../utils";
import { lighten } from "../theme/helpers";
import { baseColor, grayColorVariants } from "../theme/selectors";

const isSelected = p => p.selected;
const whenSelected = whenTrueApplyStylesInline(isSelected);

const withSelectableBackground = (
  bgColor,
  borderHoverColor
) => WrappedStyledComponent => {
  const backgroundColor = notUndefOrElse(
    bgColor,
    compose2(lighten(0.6), baseColor)
  );
  const borderColor = notUndefOrElse(
    borderHoverColor,
    grayColorVariants("lighter")
  );

  const SelectableComponent = WrappedStyledComponent.extend`
    ${whenSelected`background-color: ${backgroundColor}`};
    border: 1px solid transparent;
    cursor: pointer;
    &:hover {
      border-color: ${borderColor};
    }
  `;

  SelectableComponent.propTypes = {
    selected: PropTypes.bool
  };

  SelectableComponent.defaultProps = {
    selected: false
  };

  return SelectableComponent;
};

export default withSelectableBackground;
