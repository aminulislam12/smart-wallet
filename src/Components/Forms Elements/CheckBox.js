import React from "react";
import Col from "../Col";
import Row from "../Row";

export default function CheckBox({ col, children, text, value, ...rest }) {
  return (
    <Row className="form-group">
      <Col className={`col-${col}`}>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            value={value}
            {...rest}
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            {text} {children}{" "}
          </label>
        </div>
      </Col>
    </Row>
  );
}
