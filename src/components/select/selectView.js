/* eslint-disable react/prop-types */
import React from 'react';
import './selectStyles.scss';

const Select = ({ text, data, styleProps, ...props }) => {
  const cssClassName = `text-con mt-1 block w-full rounded-md 
  border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 
  focus:outline-none focus:ring-indigo-500 sm:text-sm`
  return (
    <select
      className={cssClassName}
      style={styleProps}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {data && data.length > 0 && data.map((s) => {
        return <option key={s.name} value={s.name}>{s.name}</option>
      })}
    </select>
  )
};

export default Select;
