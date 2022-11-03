import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import CardBody from "./CardBody";
import Col from "./Col";
import ContentWrapper from "./ContentWrapper";
import Form from "./Forms Elements/Form";
import Input from "./Forms Elements/Input";
import Option from "./Forms Elements/Option";
import Select from "./Forms Elements/Select";
import Row from "./Row";

export default function AddAccountForm() {
  const amountType = ["Select", "Bank", "MFS"];
  const MFSType = ["Select", "bKash", "Rocket", "Nagad"];

  //Form State
  const [accType, setAccType] = useState("Select");
  const [mfsType, setMfsType] = useState("Select");
  const [bankname, setBankName] = useState("");
  const [accName, setAccName] = useState("");
  const [accNum, setAccNumber] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    console.log({ accType, mfsType, bankname, accName, accNum });
    resetForm();
  };

  const resetForm = () => {
    setAccType("Select");
    setAccName("");
    setAccNumber();
    setBankName("");
    setAccType("");
  };
  return (
    <ContentWrapper>
      <Row>
        <Col className="col-xl-12">
          <Card className="m-b-30">
            <CardBody>
              <Form onSubmit={submitHandle}>
                <Select
                  lable="Account Type"
                  value={accType}
                  onChange={(e) => setAccType(e.target.value)}
                >
                  {amountType.map((opt) => (
                    <Option options={opt} key={Math.random()} value={opt} />
                  ))}
                </Select>
                {accType === "MFS" ? (
                  <Select
                    lable="MFS Name"
                    value={mfsType}
                    onChange={(e) => setMfsType(e.target.value)}
                  >
                    {MFSType.map((opt) => (
                      <Option options={opt} key={Math.random()} value={opt} />
                    ))}
                  </Select>
                ) : null}
                {accType === "Bank" ? (
                  <Input
                    lable="Bank Name"
                    placeholder="Enter Bank Name"
                    type="text"
                    value={bankname}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                ) : null}
                <Input
                  lable="Account Name"
                  placeholder="Enter Account Name"
                  type="text"
                  value={accName}
                  onChange={(e) => setAccName(e.target.value)}
                />
                <Input
                  lable="Acount Number"
                  placeholder="Enter Account Number"
                  type="number"
                  value={accNum}
                  onChange={(e) => setAccNumber(e.target.value)}
                />
                <div className="float-left mt-3">
                  <Button className="btn btn-success" type="submit">
                    Add
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </ContentWrapper>
  );
}
