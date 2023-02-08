/* eslint-disable react/prop-types */
import React from 'react';
import './selectStyles.scss';

const Select = ({ text, data, styleProps, ...props }) => {
  return (
    <select
      className='text-con'
      style={styleProps}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {data.map((s) => {
        return <option key={s.name} value={s.name}>{s.name}</option>
      })}
    </select>
  )
};

export default Select;
