import React from "react";
import { Button } from "reactstrap";
import Col from "../Col";
import Row from "../Row";

export default function CustomSubmitBtn() {
  return (
    <Row className="form-group text-center m-t-20">
      <Col className="col-12">
        <Button
          color="primary"
          type="submit"
          className="waves-effect waves-light"
          block
        >
          LogIn
        </Button>
      </Col>
    </Row>
  );
}
