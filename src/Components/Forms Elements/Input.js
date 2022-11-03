import React from "react";
import Col from "../Col";
import Row from "../Row";
import Lable from "./Lable";

export default function Input({ lable, type, placeholder, ...rest }) {
  return (
    <Row className="form-group">
      <Lable>{lable}</Lable>
      <Col className="col-sm-10">
        <input
          className="form-control"
          type={type}
          placeholder={placeholder}
          {...rest}
        />
      </Col>
    </Row>
  );
}
