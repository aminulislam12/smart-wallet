import React from "react";

export default function Terms({ children }) {
  return (
    <>
      <h5 className="font-14 text-muted mb-4">Terms :</h5>
      <div>{children}</div>
    </>
  );
}
