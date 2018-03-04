import themes from "styled-theming";
import { css } from "styled-components";
import PropTypes from "prop-types";
import Color from "color";

export const mainVariants = (kind, variants) => {
  const variantKeys = Object.keys(variants);
  const mainVariants = variantKeys.reduce((acc, variantKey) => {
    return {
      ...acc,
      [variantKey]: {
        main: variants[variantKey]
      }
    };
  }, {});

  return {
    [kind]: themes.variants("mode", kind, mainVariants),
    [`${kind}PropTypes`]: PropTypes.oneOf(variantKeys)
  };
};

export const lighten = val => color =>
  Color(color)
    .lighten(val)
    .hex();

export const darken = val => color =>
  Color(color)
    .darken(val)
    .hex();

export const compose2 = (a, b) => c => a(b(c));

export const ifElse = predicate => (tru, fals) => props =>
  predicate(props) ? tru(props) : fals(props);

export const when = predicate => (...styles) => props =>
  predicate(props) ? css(...styles) : null;