import React from "react";
import Col from "../Col";
import Row from "../Row";
import Lable from "./Lable";

export default function Textarea({ lable, placeholder, ...rest }) {
  return (
    <Row className="form-group">
      <Lable>{lable}</Lable>
      <Col className="col-sm-10">
        <textarea
          className="form-control"
          placeholder={placeholder}
          {...rest}
        ></textarea>
      </Col>
    </Row>
  );
}
