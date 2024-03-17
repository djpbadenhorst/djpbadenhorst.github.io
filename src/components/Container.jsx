import React from 'react';
import PropTypes from 'prop-types';

export const Container = ({ className, children }) => {
  const baseClassNames = [
    "min-w-10",
    "min-h-10",
    "bg-grayscale-50",
    "rounded-sm",
    "border-4",
    "border-double",
    "border-black",
  ];
  return (
    <div className={`${baseClassNames.join(' ')} ${className}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
};

Container.defaultProps = {
};

