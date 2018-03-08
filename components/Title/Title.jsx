import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { mainVariants } from '../../themes/helpers';

const [fontSize, sizePropTypes] = mainVariants("size", {
    "small": "1em", 
    "normal": "1.2em", 
    "large": "1.5em", 
}, true)

const Title = styled.h2`
    margin: 0;
    margin-bottom: 0.3em;
    font-size: ${fontSize}
`;

Title.propTypes = {
    size: sizePropTypes
}

Title.defaultProps = {
    size: "normal"
}

export default Title;