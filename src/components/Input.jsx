import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ type, placeholder }) => {
  let baseClassNames = [
    "py-0", "px-3",
    "rounded-sm",
    "bg-grayscale-20",
    "border-2",
    "border-grayscale-40",
    "focus:border-grayscale-80",
    "focus:ring-grayscale-60",
    "text-sm",
    "text-grayscale-80",
    "font-semibold",
  ];
  
  return (
    <input type={type || 'text'} className={baseClassNames.join(' ')} placeholder={placeholder}/>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text'
};
