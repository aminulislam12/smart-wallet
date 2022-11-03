import React from "react";

export default function Lable({ children, className }) {
  return (
    <>
      <label className={`col-sm-2 col-form-label ${className}`}>
        {children}
      </label>
    </>
  );
}
