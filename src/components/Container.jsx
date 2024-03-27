import React from 'react';
import PropTypes from 'prop-types';

export const Container = ({ className, children }) => {
  const baseClassNames = [
    "min-w-10",
    "min-h-10",
    "bg-black",
    "rounded-lg",
    "border-4",
    "border-primary-80",
    "border-black",
  ];
  return (
    <div className={`${baseClassNames.join(' ')} ${className}`}>
      {children}
    </div>
  );
};

Container.propTypes = { };

Container.defaultProps = { };

