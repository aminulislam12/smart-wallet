import React from "react";

export default function Button({ className, children, disabled, ...rest }) {
  return (
    <>
      <button className={className} disabled={disabled} {...rest}>
        {children}
      </button>
    </>
  );
}
