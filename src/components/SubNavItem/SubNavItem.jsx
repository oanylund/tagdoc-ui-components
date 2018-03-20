import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ifElse } from "../../utils";
import { baseColor } from "../../theme/selectors";

const isActiveOrElse = ifElse(p => p.active);

const backgroundColor = "none";
const backgroundColorHover = "rgba(0, 0, 0, 0.05)";
const backgroundColorActive = "rgba(0, 0, 0, 0.15)";

const fontColor = "black";
const fontColorHover = baseColor;
const fontColorActive = baseColor;
const activeOrNormalFontColor = isActiveOrElse(fontColorActive, fontColor);

const activeClassName = p => p.activeClassName;

const SubNavItem = styled.a`
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background: ${backgroundColor};
  color: ${activeOrNormalFontColor};
  user-select: none;
  cursor: pointer;
  font-size: 1em;

  &:link,
  &:visited {
    text-decoration: none;
    color: ${fontColor};
  }

  &:hover {
    background: ${backgroundColorHover};
    color: ${fontColorHover};
  }

  &:active,
  &.${activeClassName} {
    background: ${backgroundColorActive};
    color: ${fontColorActive};
  }
`;

SubNavItem.propTypes = {
  active: PropTypes.bool,
  activeClassName: PropTypes.string
};

SubNavItem.defaultProps = {
  active: undefined,
  activeClassName: "active"
};

export default SubNavItem;
