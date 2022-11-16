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

export default function AddIncomeForm() {
  const { incomeTransction, addIncome, accountList } = useGlobalState();
  const uuid = incomeTransction.length + 1;
  const accname = accountList.map(
    (item) => `${+item.acc_number} ${item.bank_name} ${item.account_name}`
  );
  const categorys = ["Select", "Salary", "Profit", "Invesment"];

  //Form State
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Select");

  const submitHandle = (e) => {
    e.preventDefault();
    if (amount !== "") {
      const newIncomeTnx = {
        id: uuid,
        amount: amount * 1,
        account,
        date: new Date(date).toISOString(),
        description,
        category,
      };

      addIncome(newIncomeTnx);
      resetForm();
    }
  };

  const resetForm = () => {
    setAmount("");
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
                  required
                >
                  {accountList.length === 0 ? (
                    <Option
                      value="Please Before Add Account"
                      options="Please Before Add Account"
                    />
                  ) : accountList.length === 1 ? (
                    accname.map((opt) => (
                      <>
                        <option>Select</option>
                        <Option options={opt} key={Math.random()} value={opt} />
                      </>
                    ))
                  ) : (
                    accname.map((opt) => (
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
                  required
                />
                <Textarea
                  lable="Description"
                  placeholder="Description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                <Select
                  lable="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  {categorys.map((opt) => (
                    <Option options={opt} key={Math.random()} value={opt} />
                  ))}
                </Select>
                <div className="float-left mt-3">
                  <Button className="btn btn-success">
                    {" "}
                    <i className="fas fa-plus-circle"></i> Add Income
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
