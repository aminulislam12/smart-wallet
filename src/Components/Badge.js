import React from "react";

export default function Badge({ className, children, ...rest }) {
  return (
    <span className={`badge ${className}`} {...rest}>
      {children}
    </span>
  );
}
