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
import Textarea from "./Forms Elements/Textarea";
import Row from "./Row";

export default function AddExpanceForm() {
  const amountType = ["Select", "Bank", "MFS"];
  const category = ["Select", "Salary", "Profit", "Invesment"];
  const bankAccount = ["Select", "Aminul Islam", "Aminul Islam"];
  const mfsAccount = ["Select", "Aminul Islam", "Faisal"];
  //Form State
  const [amount, setAmount] = useState("");
  const [accType, setAccType] = useState("Select");
  const [Bnaccount, setbnAccount] = useState("Select");
  const [mfsaccount, setMfsAccount] = useState("Select");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [categ, setcategory] = useState("Select");

  const submitHandle = (e) => {
    e.preventDefault();
    if (accType === "Bank") {
      console.log({
        amount,
        accType,
        Bnaccount,
        date,
        time,
        description,
        categ,
      });
    } else if (accType === "MFS") {
      console.log({
        amount,
        accType,
        mfsaccount,
        date,
        time,
        description,
        categ,
      });
    }
    resetForm();
  };

  const resetForm = () => {
    setAmount("");
    setAccType("Select");
    setDate("");
    setTime("");
    setDescription("");
    setcategory("Select");
    setbnAccount("Select");
    setMfsAccount("Select");
  };
  return (
    <ContentWrapper>
      <Row>
        <Col className="col-xl-12">
          <Card className="m-b-30">
            <CardBody>
              <Form onSubmit={submitHandle}>
                <Input
                  lable="Amount"
                  type="number"
                  placeholder="Enter Your Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <Select
                  lable="Account Type"
                  value={accType}
                  onChange={(e) => setAccType(e.target.value)}
                >
                  {amountType.map((opt) => (
                    <Option options={opt} key={Math.random()} value={opt} />
                  ))}
                </Select>
                {accType === "Bank" ? (
                  <Select
                    lable="Bank Account"
                    value={Bnaccount}
                    onChange={(e) => setbnAccount(e.target.value)}
                  >
                    {bankAccount.map((opt) => (
                      <Option options={opt} key={Math.random()} value={opt} />
                    ))}
                  </Select>
                ) : accType === "MFS" ? (
                  <Select
                    lable="MFS Account"
                    value={mfsaccount}
                    onChange={(e) => setMfsAccount(e.target.value)}
                  >
                    {mfsAccount.map((opt) => (
                      <Option options={opt} key={Math.random()} value={opt} />
                    ))}
                  </Select>
                ) : null}
                <Input
                  lable="Date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <Input
                  lable="Time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
                <Textarea
                  lable="Description"
                  placeholder="Description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Select
                  lable="Category"
                  value={categ}
                  onChange={(e) => setcategory(e.target.value)}
                >
                  {category.map((opt) => (
                    <Option options={opt} key={Math.random()} value={opt} />
                  ))}
                </Select>
                <div className="float-left mt-3">
                  <Button className="btn btn-success">Submit</Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </ContentWrapper>
  );
}
