import React from "react";

export default function Form({ children, className, onSubmit, ...rest }) {
  return (
    <>
      <form className={className} onSubmit={onSubmit} {...rest}>
        {children}
      </form>
    </>
  );
}
