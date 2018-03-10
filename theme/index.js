import components from "./components";

const primaryColors = {
  base: "#215DE0",
}

const colorVariants = {
  variants: {
    default: primaryColors.base,
    success: "green",
    danger: "red",
    warning: "orange"
  }
};

export const colors = {
  ...primaryColors,
  ...colorVariants
}

export const styles = {
  cardBase: `
    background-color: white;
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.07);
  `
};

const defaultTheme = {
  components,
  colors,
  styles
};

export default defaultTheme;
