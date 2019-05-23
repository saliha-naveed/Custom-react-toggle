import React from 'react';
import styled from 'styled-components';

const StyledLable = styled.label`
  cursor: pointer;
  text-indent: 10px;
  width: 70px;
  height: 33px;
  background: #2b3039;
  display: block;
  border-radius: 100px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 27px;
    height: 23px;
    background: #dc3545;
    border-radius: 90px;
    transition: 0.3s;
  }
  &:active:after{
    width: 130px;
  }
`;

const StyledInput = styled.input`
  width: 37px;
  height: 39px;
  margin-right: 10px;
  &:checked+${StyledLable} {
    background: #2b3039;
  }
  &:checked+${StyledLable}:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
    background-color: #347129 !important;
  }
  &[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
  }
`;

class ToggleBtn extends React.Component {
  render() {
    return (
      <div>
        <StyledInput type="checkbox" id="switch" />
        <StyledLable htmlFor="switch" />
      </div>
    );
  }
}

export default ToggleBtn;
