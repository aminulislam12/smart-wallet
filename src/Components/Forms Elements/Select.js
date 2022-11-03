import React from "react";
import Col from "../Col";
import Row from "../Row";
import Lable from "./Lable";

export default function Select({ lable, children, ...rest }) {
  return (
    <Row className="form-group">
      <Lable>{lable}</Lable>
      <Col className="col-sm-10">
        <select className="form-control" {...rest}>
          {children}
        </select>
      </Col>
    </Row>
  );
}
