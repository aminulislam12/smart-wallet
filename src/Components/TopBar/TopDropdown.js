import React from "react";

export default function TopDropdown({ children, className }) {
  return (
    <div className={`dropdown-menu dropdown-menu-animated ${className}`}>
      {children}
    </div>
  );
}
