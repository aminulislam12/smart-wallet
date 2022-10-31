import React from "react";

export default function Col({ className, children, ...rest }) {
  return (
    <>
      <div className={className} {...rest}>
        {children}
      </div>
    </>
  );
}
