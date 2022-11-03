import React from "react";
import Footer from "./Footer";

export default function Container({ children }) {
  return (
    <div className="content-page">
      <div className="content">
        {children}
        <Footer />
      </div>
    </div>
  );
}
