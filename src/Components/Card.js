import React from "react";

export default function Card({ className, children, ...rest }) {
  return (
    <>
      <div className={`card ${className}`}>{children}</div>
    </>
  );
}
