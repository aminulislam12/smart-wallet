import React from "react";
import Col from "./Col";
import Row from "./Row";

export default function PageTitle({ text, children }) {
  return (
    <>
      <Row>
        <Col className="col-sm-12">
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col className="col-md-8">
                <h4 className="page-title m-0">{text}</h4>
              </Col>
              {children}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}
