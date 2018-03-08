import themes from "styled-theming";
import { css } from "styled-components";
import PropTypes from "prop-types";
import Color from "color";

export const mainVariants = (kind, variants, exportPropTypes) => {
  const variantKeys = Object.keys(variants);
  const mainVariants = variantKeys.reduce((acc, variantKey) => {
    return {
      ...acc,
      [variantKey]: {
        main: variants[variantKey]
      }
    };
  }, {});

  if (exportPropTypes !== true)
    return themes.variants("mode", kind, mainVariants);

  return [
    themes.variants("mode", kind, mainVariants),
    PropTypes.oneOf(variantKeys)
  ];
};

export const mainBaseColor = props => props.theme.main.colors.baseColor;

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
