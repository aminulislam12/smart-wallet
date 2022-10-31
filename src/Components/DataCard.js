import React from "react";
import Col from "./Col";
import Row from "./Row";
import TopCard from "./TopCard";

export default function DataCard() {
  return (
    <>
      <Row>
        <Col className="col-xl-3 col-md-6">
          <TopCard
            className="bg-gradient-green mini-stat text-white"
            title="Balance"
            balance="1,587"
            lasttnx="110"
            tnxsum="1447"
            badgeColor="badge-success text-white"
            icon="mdi mdi-wallet-outline h5"
            href="/"
          />
        </Col>

        <Col className="col-xl-3 col-md-6">
          <TopCard
            className="bg-gradient-orange mini-stat text-white"
            title="INCOME"
            balance="1,587"
            lasttnx="110"
            tnxsum="1447"
            badgeColor="badge-light text-success"
            icon="mdi mdi-credit-card-plus h5"
            href="/incomeList"
          />
        </Col>
        <Col className="col-xl-3 col-md-6">
          <TopCard
            className="bg-gradient-indigo mini-stat text-white"
            title="EXPENSES"
            balance="1,587"
            lasttnx="110"
            tnxsum="1447"
            badgeColor="badge-light text-primary"
            icon="ti-shopping-cart h5"
            href="/expenseList"
          />
        </Col>
        <Col className="col-xl-3 col-md-6">
          <TopCard
            className="bg-gradient-blue mini-stat text-white"
            title="TOTAL"
            balance="1,587"
            lasttnx="110"
            tnxsum="1447"
            badgeColor="badge-light text-info"
            icon="mdi mdi-briefcase-check h5"
            href="/report"
          />
        </Col>
      </Row>
    </>
  );
}
