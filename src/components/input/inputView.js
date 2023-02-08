/* eslint-disable react/prop-types */
import React from 'react';
import './inputStyles.scss';

const Input = ({ text, styleProps, ...props }) => {
  return (
    <input
      className='input-con'
      style={styleProps}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  )
};

export default Input;
