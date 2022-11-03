import React from "react";
import Col from "./Col";
import DropDown from "./DropDown";

export default function ExportButton() {
  return (
    <Col className="col-md-4">
      <div className="float-right d-none d-md-block">
        <DropDown icon="mdi mdi-export mr-1" text="Export" />
      </div>
    </Col>
  );
}
