import React from "react";
import Col from "../Col";
import Row from "../Row";

export default function CheckBox({ col, children, text, value, ...rest }) {
  return (
    <Row className="form-group">
      <Col className={`col-${col}`}>
        <input type="checkbox" value={value} {...rest} />
        <label>
          {text} {children}{" "}
        </label>
      </Col>
    </Row>
  );
}
