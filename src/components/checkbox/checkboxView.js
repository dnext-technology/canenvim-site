/* eslint-disable */
import React from 'react';
import './checkboxStyles.scss';

const Checkbox = ({
  type = 'text',
  text,
  styleProps,
  error,
  errorText,
  ...props
}) => {
  let errorStyle = error && { borderColor: '#D42E13' };
  return (
    <>
      {text && (
        <span className="block text-sm font-medium text-gray-700">{text}</span>
      )}
      <input
        type="checkbox"
        {...props}
        style={errorStyle || styleProps}
        className="checkbox-con mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      {errorText && (
        <p
          style={{
            fontSize: '13px',
            color: 'rgb(212, 46, 19)',
            marginTop: '2px',
          }}
        >
          {errorText}
        </p>
      )}
    </>
  );
};

export default Checkbox;
