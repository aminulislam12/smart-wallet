import React from "react";
import { useGlobalState } from "../Context/GlobalState";
import AccTableRow from "./AccTableRow";
import Card from "./Card";
import CardBody from "./CardBody";
import Col from "./Col";
import ErrorRow from "./ErrorRow";
import Row from "./Row";
import Table from "./Table";
import Tbody from "./Tbody";
import Thead from "./Thead";
import TransctionAddBTN from "./TransctionAddBTN";

export default function AccountTable() {
  const { accountList } = useGlobalState();
  const tableHead = [
    "S.L",
    "Bank Name",
    "Account Name",
    "A/C Number",
    "A/C Type",
    "Balance",
    "Action",
  ];
  return (
    <>
      <Row>
        <Col className="col-xl-12">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title mb-4">
                ACCOUNT LIST
                <TransctionAddBTN
                  className="btn-success"
                  to="/addAccount"
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
                  {accountList.length === 0 ? (
                    <ErrorRow />
                  ) : (
                    accountList.map((item) => (
                      <AccTableRow key={Math.random()} tnxDetails={item} />
                    ))
                  )}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
