import React, { Component } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

class Portal extends Component {
  constructor(props) {
    super(props);
    this.portalRoot = this.setupRootElement.call(this, props.rootElementId);
    this.el = document.createElement("div");
  }
  setupRootElement(rootId) {
    if (rootId) return document.getElementById(rootId);

    const defaultId = "portal-root";
    const rootCreated = document.getElementById(defaultId);
    if (rootCreated !== null) return rootCreated;

    const rootEl = document.createElement("div");
    rootEl.id = defaultId;
    document.body.appendChild(rootEl);

    return rootEl;
  }
  componentWillMount() {
    this.portalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    this.portalRoot.removeChild(this.el);
  }
  render() {
    return createPortal(this.props.children, this.el);
  }
}

Portal.propTypes = {
  rootElementId: PropTypes.string
};

Portal.defaultProps = {
  rootElementId: undefined
};

export default Portal;
