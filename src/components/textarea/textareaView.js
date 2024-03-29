/* eslint-disable react/prop-types */
import React from 'react';
import './textareaStyles.scss';

const TextArea = ({ text, styleProps, ...props }) => {
  const cssClassName = `mt-1 block w-full rounded-md border-gray-300 
  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`;
  return (
    <>
      {text && <span className="line-default label">{text}</span>}
      <textarea
        className={cssClassName}
        style={styleProps}
        rows='5'
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </>
  );
};

export default TextArea;
