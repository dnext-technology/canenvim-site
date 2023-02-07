/* eslint-disable */
import React from 'react';
import NumberFormat from 'react-number-format';

export const numberFormatter = (num, prefix = '', suffix = '') => {
  if (isNaN(num) || !isFinite(num) || num === 0) {
    if (suffix) return <span>0.00%</span>;
    if (prefix) return <span>$0.00</span>;
    return <span>0</span>;
  }
  return (
    <NumberFormat
      value={num}
      decimalScale={prefix || suffix ? 2 : 1}
      displayType="text"
      thousandSeparator
      fixedDecimalScale
      prefix={prefix}
      suffix={suffix}
    />
  );
};