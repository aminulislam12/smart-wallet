import React from "react";
import Col from "../Col";
import Row from "../Row";

export default function Input({ type, placeholder, col, errorTxt, ...rest }) {
  return (
    <Row className="form-group">
      <Col className={`col-sm-${col}`}>
        <input
          className="form-control"
          type={type}
          placeholder={placeholder}
          {...rest}
        />
        <span id="error">{errorTxt}</span>
      </Col>
    </Row>
  );
}
