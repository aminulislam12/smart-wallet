import React from "react";
import Card from "./Card";
import CardBody from "./CardBody";
import Col from "./Col";
import Row from "./Row";

export default function SalesReport() {
  return (
    <>
      <Col className="col-xl-9">
        <Card>
          <CardBody>
            <h4 className="mt-0 header-title">Sales Report</h4>
            <Row>
              <Col className="col-lg-8">
                <div
                  id="morris-line-example"
                  className="morris-chart"
                  style={{ height: "300px" }}
                ></div>
              </Col>
              <Col className="col-lg-4">
                <div>
                  <h5 className="font-14 mb-5">Yearly Sales Report</h5>
                  <div>
                    <h5 className="mb-3">2018 : $19523</h5>
                    <p className="text-muted mb-4">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis atque quos dolores et
                    </p>
                    <a href="/report" className="btn btn-primary btn-sm">
                      Read more <i className="mdi mdi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}
