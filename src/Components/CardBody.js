import React from "react";

export default function CardBody({ className, children }) {
  return <div className={`card-body ${className}`}>{children}</div>;
}
