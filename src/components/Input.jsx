import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ type, label, className, value, setValue }) => {
  let inputClassNames = [
    "p-2.5",
    "rounded-sm",
    "border-2",
    "text-sm",
    "peer",

    "focus:border-primary-50",
    "focus:ring-black",
    "bg-grayscale-80",
    "border-grayscale-50",
    "text-white",
    "focus:ring-white",

    "focus:pt-4",
    "focus:pb-1",
    //"autofill:pt-6",
    //"autofill:pb-2",
    "[&:not(:placeholder-shown)]:pt-4",
    "[&:not(:placeholder-shown)]:pb-1",
    "placeholder:text-transparent",
    
    //"block",
    //"white-full",
    ...(className || '').split(',')
  ];
  let labelClassNames = [
    "absolute", "top-0", "start-0",
    "p-2.5",
    "text-sm",
    "text-white",
    "peer-focus:text-xs",
    "peer-focus:-translate-y-1.5",
    "peer-focus:text-grayscale-50",
    "peer-[:not(:placeholder-shown)]:text-xs",
    "peer-[:not(:placeholder-shown)]:-translate-y-1.5",
    "peer-[:not(:placeholder-shown)]:text-grayscale-50",
    "pointer-events-none",
    "transition",
    "ease-in-out",
    "duration-100",
    //"h-full",
    //"truncate",
  ];

  const id = React.useId();
  return (
    <div className="relative">
      <input id={id}
             type={type || 'text'}
             className={inputClassNames.join(' ')}
             placeholder="placeholder"
             onInput={e => setValue(e.target.value)}
      />
      <label htmlFor={id}
             className={labelClassNames.join(' ')}>
        {label}
      </label>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};

Input.defaultProps = {
  type: 'text'
};
