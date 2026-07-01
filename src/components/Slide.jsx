import React from 'react';

export default function Slide({ children, className = '', as = 'div', noPad = false, ...rest }) {
  const Tag = as;
  return (
    <Tag className={`slide ${noPad ? 'slide-flush' : ''} ${className}`} data-slide="true" {...rest}>
      {children}
    </Tag>
  );
}
