import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { cardBaseStyle } from '../../themes/selectors';

const Card = styled.div`
  ${cardBaseStyle}
  padding: 10px;
`;

export default Card;