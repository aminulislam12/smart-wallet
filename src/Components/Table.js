import React from "react";

export default function Table({ children, className }) {
  return (
    <div className="table-responsive">
      <table className={`table ${className}`}>{children}</table>
    </div>
  );
}
