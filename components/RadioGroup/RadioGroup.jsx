import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { notUndefOrElse } from "../../utils";
import Radio, { radioPropTypes } from "../Radio/Radio";

const RadioGroupStyled = styled.ul`
  padding: 0;
  list-style: none;

  /* & > li {
    float: left;
  }

  & > li:not(:first-child) {
    margin-left: 1em;
  } */
`;

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.getRadioProps = this.getRadioProps.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(val) {
    if (this.props.onChange) this.props.onChange(val);
  }
  getRadioProps(radioProps) {
    return {
      groupName: this.props.name,
      checked: radioProps.value === this.props.selectedValue,
      onChange: this.props.onChange,
      // Override styles of childs
      size: notUndefOrElse(this.props.size, radioProps.size),
      radioColor: notUndefOrElse(this.props.radioColor, radioProps.radioColor),
      disabled: notUndefOrElse(this.props.disabled, radioProps.disabled)
    };
  }
  renderOptions() {
    return (
      <li>
        {this.props.options.map((option, i) => (
          <Radio key={i} {...{ ...option, ...this.getRadioProps(option) }} />
        ))}
      </li>
    );
  }
  renderChildren() {
    return React.Children.map(this.props.children, radio => (
      <li>{React.cloneElement(radio, this.getRadioProps(radio.props))}</li>
    ));
  }
  render() {
    return (
      <RadioGroupStyled>
        {this.props.options ? this.renderOptions() : this.renderChildren()}
      </RadioGroupStyled>
    );
  }
}

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  selectedValue: PropTypes.any,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([Radio])
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([Radio])
      })
    )
  ]),
  options: PropTypes.arrayOf(PropTypes.shape(radioPropTypes)),
  // Radio variants that will override child styles if set
  size: radioPropTypes.size,
  radioColor: radioPropTypes.radioColor,
  disabled: radioPropTypes.disabled
};

RadioGroup.defaultProps = {
  selectedValue: undefined,
  size: undefined,
  radioColor: undefined,
  disabled: undefined
};

export default RadioGroup;
