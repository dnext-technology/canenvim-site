/* eslint-disable */
import React from 'react';
import DatePicker from 'react-datepicker';
import './datepickerStyles.scss';

const Datepicker = ({ text, styleProps, error, ...props }) => {
  let errorStyle = error && { borderColor: '#D42E13' };
  return (
    <>
      {text && (
        <span className="line-default label">{text}</span>
      )}

      <DatePicker
        {...props}
        style={errorStyle || styleProps}
        className="input-con mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </>
  );
};

export default Datepicker;
