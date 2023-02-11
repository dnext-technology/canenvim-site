/* eslint-disable */
import React from 'react';
import './inputStyles.scss';

const Input = ({ text, styleProps, error, ...props }) => {
  let errorStyle = error && { borderColor: "#D42E13"}
  return (
    <input
      className='input-con'
      style={errorStyle || styleProps}
      {...props}
    />
  )
};

export default Input;
