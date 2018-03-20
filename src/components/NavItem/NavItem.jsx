import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ifElse } from "../../utils";
import { variants } from "../../theme/helpers";

const isActiveOrElse = ifElse(p => p.active);

const backgroundColor = "none";
const backgroundColorHover = "rgba(255, 255, 255, 0.15)";
const backgroundColorActive = "rgba(0, 0, 0, 0.15)";

const activeOrNormalBgColor = isActiveOrElse(
  backgroundColorActive,
  backgroundColor
);

const fontColor = "white";
const fontColorHover = fontColor;
const fontColorActive = fontColor;

const activeOrNormalFontColor = isActiveOrElse(fontColorActive, fontColor);

const activeClassName = p => p.activeClassName;

const NavItem = styled.a`
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background: ${activeOrNormalBgColor};
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

NavItem.propTypes = {
  active: PropTypes.bool,
  activeClassName: PropTypes.string
};

NavItem.defaultProps = {
  active: undefined,
  activeClassName: "active"
};

export default NavItem;
