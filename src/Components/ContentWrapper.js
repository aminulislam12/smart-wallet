import React from "react";

export default function ContentWrapper({ children }) {
  return (
    <div className="page-content-wrapper">
      <div className="container-fluid">{children}</div>
    </div>
  );
}
