import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { variants } from "../../theme/helpers";

const fontSize = variants("size", {
  small: "1em",
  normal: "1.2em",
  large: "1.5em"
});

const Title = styled.h2`
  margin: 0;
  margin-bottom: 0.3em;
  font-size: ${fontSize};
`;

Title.propTypes = {
  size: PropTypes.oneOf(["small", "normal", "large"])
};

Title.defaultProps = {
  size: "normal"
};

export default Title;
