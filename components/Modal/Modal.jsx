import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Portal from "../Portal/Portal";

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(33, 33, 33, 0.2);
`;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleBackgroundClick = this.handleBackgroundClick.bind(this);
  }
  handleBackgroundClick(e) {
    if (this.modalRef === e.target) {
      this.props.onBackgroundClick(e);
    }
  }
  render() {
    const { show, onBackgroundClick, className, ...childProps } = this.props;
    return (
      <Portal>
        {show && (
          <ModalBackground
            className={className}
            onClick={this.handleBackgroundClick}
            innerRef={ref => (this.modalRef = ref)}
          >
            {this.props.children(childProps)}
          </ModalBackground>
        )}
      </Portal>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  onBackgroundClick: PropTypes.func
};

Modal.defaultProps = {
  show: false,
  onBackgroundClick: () => {}
};

export default Modal;
