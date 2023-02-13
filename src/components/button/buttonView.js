/* eslint-disable react/prop-types */
import React from 'react';
import './buttonStyles.scss';

const Button = ({ text, styleProps, ...props }) => {
  return (
    <button
      className='button-con'
      style={styleProps}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <span>
        {text}
      </span>
    </button>
  )
};

export default Button;
