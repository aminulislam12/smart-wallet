import React from "react";
import Row from "./Row";
import SalesAnalytics from "./SalesAnalytics";
import SalesReport from "./SalesReport";

export default function Analytics() {
  return (
    <Row>
      <SalesReport />
      <SalesAnalytics />
    </Row>
  );
}
