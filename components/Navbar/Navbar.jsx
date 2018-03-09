import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { mainBaseColor } from '../../themes/selectors';

const Navbar = styled.nav`
    background: ${mainBaseColor};
    display: flex;
    height: 40px;
`;

Navbar.propTypes = {

}

Navbar.defaultProps = {

}

export default Navbar;