import React from "react";
import Card from "./Card";
import CardBody from "./CardBody";
import Col from "./Col";
import Row from "./Row";
import Table from "./Table";
import TableRow from "./TableRow";
import Tbody from "./Tbody";
import Thead from "./Thead";
import TransctionAddBTN from "./TransctionAddBTN";

export default function ExpanceTnxTable() {
  const tableHead = [
    "TNX No.",
    "Description",
    "Date",
    "Time",
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
                  <TableRow />
                  <TableRow />
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
