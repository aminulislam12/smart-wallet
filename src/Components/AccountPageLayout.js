import React from "react";
import Row from "./Row";

export default function AccountPageLayout({ children }) {
  return (
    <div className="account-pages">
      <div className="container">
        <Row className="align-items-center">{children}</Row>
      </div>
    </div>
  );
}
