import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "styled-theming";
import { ifElse } from "../../utils";

const isActiveOrElse = ifElse(p => p.active);

const backgroundColor = theme("mode", {
  main: "none"
});
const backgroundColorHover = theme("mode", {
  main: "rgba(255, 255, 255, 0.15)"
});
const backgroundColorActive = theme("mode", {
  main: "rgba(0, 0, 0, 0.15)"
});
const activeOrNormalBgColor = isActiveOrElse(
  backgroundColorActive,
  backgroundColor
);

const fontColor = theme("mode", {
  main: "white"
});
const fontColorHover = theme("mode", {
  main: "white"
});
const fontColorActive = theme("mode", {
  main: "white"
});
const activeOrNormalFontColor = isActiveOrElse(fontColorActive, fontColor);

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

  &:active {
    background: ${backgroundColorActive};
    color: ${fontColorActive};
  }
`;

NavItem.propTypes = {
  active: PropTypes.bool
};

NavItem.defaultProps = {
  active: false
};

export default NavItem;
