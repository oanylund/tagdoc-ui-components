import React from "react";
import styled, { css } from "styled-components";

const RadioInput = styled.input.attrs({
  type: "radio"
})`
  position: fixed;
  opacity: 0;
`;

export default RadioInput;