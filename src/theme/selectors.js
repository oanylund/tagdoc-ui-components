import { compose2, appendTo } from '../utils';
import { getThemeProp } from './helpers';

export const baseColor = props => props.theme.colors.base;

export const cardBaseStyle = props => props.theme.styles.cardBase;

export const stateColorVariants = compose2(
  getThemeProp,
  appendTo(["colors", "stateVariants"])
);

export const grayColorVariants = compose2(
  getThemeProp,
  appendTo(["colors", "grayVariants"])
);
