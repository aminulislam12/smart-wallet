import React, { useState } from "react";
import { useGlobalState } from "../Context/GlobalState";
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
  const { expenceTransction, addExpence, accountList } = useGlobalState();
  const uuid = expenceTransction.length + 1;
  const categorys = ["Select", "Salary", "Profit", "Invesment"];
  const accounts = accountList.map(
    (item) => `${item.acc_number} ${item.bank_name} ${item.account_name}`
  );
  //Form State
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("Select");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Select");

  const submitHandle = (e) => {
    e.preventDefault();
    if (amount !== "") {
      const newExpenceTrnx = {
        id: uuid,
        amount: amount * 1,
        account,
        date: new Date(date).toISOString(),
        description,
        category,
      };
      addExpence(newExpenceTrnx);
      console.log(newExpenceTrnx);
    }
    resetForm();
  };

  const resetForm = () => {
    setAmount("");
    setAccount("Select");
    setDate("");
    setDescription("");
    setCategory("Select");
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
                  col="10"
                />
                <Select
                  lable="Account"
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                >
                  {accountList.length === 0 ? (
                    <Option
                      options="Before Add Account"
                      value="Before Add Account"
                    />
                  ) : accountList.length === 1 ? (
                    accounts.map((opt) => (
                      <>
                        <option key={Math.random()}>Select</option>
                        <Option options={opt} key={Math.random()} value={opt} />
                      </>
                    ))
                  ) : (
                    accounts.map((opt) => (
                      <Option options={opt} key={Math.random()} value={opt} />
                    ))
                  )}
                </Select>

                <Input
                  lable="Date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  col="10"
                />

                <Textarea
                  lable="Description"
                  placeholder="Description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Select
                  lable="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categorys.map((opt) => (
                    <Option options={opt} key={Math.random()} value={opt} />
                  ))}
                </Select>
                <div className="float-left mt-3">
                  <Button className="btn btn-success">
                    <i className="fas fa-plus-circle"></i> Add Expance
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
