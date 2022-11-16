import React from "react";
import { useGlobalState } from "../Context/GlobalState";
import Card from "./Card";
import CardBody from "./CardBody";
import Col from "./Col";
import ErrorRow from "./ErrorRow";
import Row from "./Row";
import Table from "./Table";
import TableRow from "./TableRow";
import Tbody from "./Tbody";
import Thead from "./Thead";
import TotalTableRow from "./TotalTableRow";
import TransctionAddBTN from "./TransctionAddBTN";

export default function IncomeTnxTable() {
  const { incomeTransction } = useGlobalState();
  const incomeAmounts = incomeTransction.map((incomeTnx) => incomeTnx.amount);
  const totalIncome = incomeAmounts
    .reduce((prevvalue, currValue) => (prevvalue += currValue), 0)
    .toFixed(2);

  const tableHead = [
    "TNX No.",
    "Description",
    "Date",
    "Category",
    "Account",
    "Amount",
    "Action",
  ];
  return (
    <>
      <Row>
        <Col className="col-xl-12">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title mb-4">
                Latest Trasaction
                <TransctionAddBTN
                  className="btn-success"
                  to="/addIncome"
                  icon="mdi mdi-credit-card-plus"
                />
              </h4>
              <Table className="table-hover">
                <Thead>
                  {tableHead.map((th) => (
                    <th scope="col" key={Math.random()}>
                      {th}
                    </th>
                  ))}
                </Thead>
                <Tbody>
                  {incomeTransction.length === 0 ? (
                    <ErrorRow />
                  ) : (
                    incomeTransction.map((item) => (
                      <TableRow key={item.id} tnxdetails={item} />
                    ))
                  )}
                  <TotalTableRow total={totalIncome} />
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
