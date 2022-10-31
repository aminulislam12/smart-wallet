import React from "react";
import Badge from "./Badge";
import Card from "./Card";
import CardBody from "./CardBody";
import Col from "./Col";
import Row from "./Row";
import Table from "./Table";
import Tbody from "./Tbody";
import Thead from "./Thead";

export default function TableResponsive() {
  return (
    <>
      <Row>
        <Col className="col-xl-12">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title mb-4">Latest Trasaction</h4>
              <Table className="table-hover">
                <Thead>
                  <th scope="col">TNX No.</th>
                  <th scope="col">Description</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Account</th>
                  <th scope="col">Category</th>
                  <th scope="col">Amount</th>
                </Thead>
                <Tbody>
                  <tr>
                    <th scope="row">#14567</th>
                    <td>Michael Mitchell</td>
                    <td>14 Jan 2022</td>
                    <td>Thu 06:53 PM</td>
                    <td>Cash</td>
                    <td>
                      <Badge className="badge-success">Income</Badge>
                    </td>
                    <td>$148</td>
                  </tr>
                  <tr>
                    <th scope="row">#14568</th>
                    <td>Dennis Cervantes</td>
                    <td>14 Jan 2022</td>
                    <td>Thu 06:53 PM</td>
                    <td>Cash</td>
                    <td>
                      <span className="badge badge-danger">Expense</span>
                    </td>
                    <td>$144</td>
                  </tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
