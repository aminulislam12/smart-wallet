import React from "react";
import Col from "./Col";
import Row from "./Row";

export default function PageTitle({ text }) {
  return (
    <>
      <Row>
        <Col className="col-sm-12">
          <div className="page-title-box">
            <div className="row align-items-center">
              <Col className="col-md-8">
                <h4 className="page-title m-0">{text}</h4>
              </Col>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
