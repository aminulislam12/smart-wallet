import "bootstrap/dist/js/bootstrap.bundle.js";
import React from "react";

export default function Alert({ text }) {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Warning!</strong> {text}
      </div>
    </>
  );
}
