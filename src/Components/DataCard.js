import React from "react";
import { useGlobalState } from "../Context/GlobalState";
import Col from "./Col";
import Row from "./Row";
import TopCard from "./TopCard";

export default function DataCard() {
  const { incomeTransction, expenceTransction } = useGlobalState();
  const incomeAmounts = incomeTransction.map((incomeTnx) => incomeTnx.amount);
  const expenceAmounts = expenceTransction.map(
    (expenceTnx) => expenceTnx.amount
  );

  const totalIncome = incomeAmounts
    .reduce((prevvalue, currValue) => (prevvalue += currValue), 0)
    .toFixed(2);
  const totalExpence = expenceAmounts
    .reduce((prevValue, currentValue) => (prevValue += currentValue), 0)
    .toFixed(2);

  const balance = (totalIncome - totalExpence).toFixed(2);
  return (
    <>
      <Row>
        <Col className="col-xl-3 col-md-6">
          <TopCard
            className="bg-gradient-green mini-stat text-white"
            title="Balance"
            balance={balance}
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
            balance={totalIncome}
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
            balance={totalExpence}
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
