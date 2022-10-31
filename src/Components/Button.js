import React from "react";

export default function Button({ className, children, ...rest }) {
  return (
    <>
      <button className={className} {...rest}>
        {children}
      </button>
    </>
  );
}
