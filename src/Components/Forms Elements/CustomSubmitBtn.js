import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import Col from "../Col";
import Row from "../Row";

export default function CustomSubmitBtn({ disabled }) {
  const location = useLocation();
  const path = location.pathname;
  return (
    <Row className="form-group text-center m-t-20">
      <Col className="col-12">
        <Button
          color="primary"
          type="submit"
          className="waves-effect waves-light"
          block
          disabled={disabled}
        >
          {path === "/register"
            ? "Register"
            : path === "/login"
            ? "LogIn"
            : null}
        </Button>
      </Col>
    </Row>
  );
}
