/* eslint-disable react/prop-types */
import React from 'react';
import './textareaStyles.scss';

const TextArea = ({ text, styleProps, ...props }) => {
  return (
    <textarea
      className='textarea-con'
      style={styleProps}
      rows="5"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  )
};

export default TextArea;
