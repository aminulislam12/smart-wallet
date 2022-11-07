import "bootstrap/dist/js/bootstrap.bundle.js";
import React from "react";

export default function Alert({ text }) {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
        <strong>Warning!</strong> {text}
      </div>
    </>
  );
}
