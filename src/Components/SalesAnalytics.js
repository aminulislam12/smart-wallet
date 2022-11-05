import React from "react";
import Card from "./Card";
import CardBody from "./CardBody";
import CategoryChart from "./Chart/CategoryChart";
import Col from "./Col";

export default function SalesAnalytics() {
  return (
    <Col className="col-xl-3">
      <Card>
        <CardBody>
          <h4 className="mt-0 header-title">Sales Analytics</h4>
          <CategoryChart />
        </CardBody>
      </Card>
    </Col>
  );
}
