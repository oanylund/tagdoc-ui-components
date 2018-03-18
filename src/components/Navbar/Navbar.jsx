import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { baseColor } from '../../theme/selectors';

const Navbar = styled.nav`
    background: ${baseColor};
    display: flex;
    height: 40px;
`;

Navbar.propTypes = {

}

Navbar.defaultProps = {

}

export default Navbar;