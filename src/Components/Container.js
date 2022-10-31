import React from "react";

export default function Container({ children }) {
  return (
    <div className="content-page">
      <div className="content">{children}</div>
    </div>
  );
}
