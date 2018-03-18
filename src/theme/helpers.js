import { css } from "styled-components";
import PropTypes from "prop-types";
import Color from "color";
import { compose2, prop, path } from "../utils";

export const getThemeProp = pathToProp => props =>
  path(pathToProp, props.theme);

export const variants = (prop, variants) => props => {
  const chosenVariant = props[prop];
  const variantValue = variants[chosenVariant];

  if (typeof variantValue === "function") return variantValue(props);

  return variantValue;
};

export const lighten = val => color =>
  Color(color)
    .lighten(val)
    .hex();

export const darken = val => color =>
  Color(color)
    .darken(val)
    .hex();

export const disabledColor = color =>
  Color(color)
    .desaturate(0.5)
    .lighten(0.2)
    .hex();
