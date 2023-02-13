/* eslint-disable */
import React from 'react';
import './inputStyles.scss';

const Input = ({ type = 'text', text, styleProps, error, ...props }) => {
  let errorStyle = error && { borderColor: '#D42E13' };
  return (
    <input
      type={type}
      {...props}
      style={errorStyle || styleProps}
      className='input-con mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
    />
  );
};

export default Input;
