import React from "react";
import Card from "./Card";
import CardBody from "./CardBody";
import Col from "./Col";

export default function SalesAnalytics() {
  return (
    <Col className="col-xl-3">
      <Card>
        <CardBody>
          <h4 className="mt-0 header-title">Sales Analytics</h4>
          <div
            id="morris-donut-example"
            className="morris-chart"
            style={{ height: "300px" }}
          ></div>
        </CardBody>
      </Card>
    </Col>
  );
}
