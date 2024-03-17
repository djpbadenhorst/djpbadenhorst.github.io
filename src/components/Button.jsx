import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ mode, label }) => {
  let baseClassNames = [
    "py-0", "px-3",
    "rounded-sm",
    "border-2", 
    "text-sm",
    "font-semibold",
    "transform",
    "active:scale-90",
    "transition-transform",
  ];

  switch (mode || 'primary') {
  case 'primary':
    baseClassNames = baseClassNames.concat([
      "bg-transparent",`text-primary-50`, `border-primary-50`,
      `hover:bg-primary-50`, "hover:text-black", 
    ]);
    break;
  case 'secondary':
    baseClassNames = baseClassNames.concat([
      "bg-transparent",`text-gradient-50`, `border-gradient-50`,
      `hover:bg-gradient-50`, "hover:text-black", 
    ]);
    break;
  case 'accent':
    baseClassNames = baseClassNames.concat([
      "bg-transparent",`text-accent-50`, `border-accent-50`,
      `hover:bg-accent-50`, "hover:text-black", 
    ]);
    break;
  }


  return (
    <button type="button" className={baseClassNames.join(' ')}>
      {label}
    </button>
  );
};

Button.propTypes = {
  mode: PropTypes.oneOf(['primary', 'secondary', 'accent']),
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  mode: 'primary',
};
