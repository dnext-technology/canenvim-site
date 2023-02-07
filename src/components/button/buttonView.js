/* eslint-disable react/prop-types */
import React from 'react';
import './buttonStyles.scss';

const Button = ({ text, styleProps }) => {
  return (
    <button
      className='button-con'
      style={styleProps}
    >
      {text}
    </button>
  )
};

export default Button;
