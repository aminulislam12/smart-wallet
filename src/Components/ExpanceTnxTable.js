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

export default function ExpanceTnxTable() {
  const { expenceTransction } = useGlobalState();
  const expenceAmounts = expenceTransction.map(
    (expenceTnx) => expenceTnx.amount
  );
  const totalExpence = expenceAmounts
    .reduce((prevValue, currentValue) => (prevValue += currentValue), 0)
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
                  to="/addExpance"
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
                  {expenceTransction.length === 0 ? (
                    <ErrorRow />
                  ) : (
                    expenceTransction.map((item) => (
                      <TableRow tnxdetails={item} key={item.id} />
                    ))
                  )}
                  <TotalTableRow total={totalExpence} />
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
